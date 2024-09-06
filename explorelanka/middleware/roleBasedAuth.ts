import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

// Middleware to check for authenticated and authorized users
export function roleBasedAuth(requiredRole: string) {   
  return async (req: NextRequest, next: Function) => {
    console.log("roleBasedAuth")
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ status: 401, message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      console.log(decoded);
      
      // // Check for role authorization
      // if (decoded.Role !== requiredRole && requiredRole !== "user") {
      //   return NextResponse.json({ status: 403, message: "Forbidden" });
      // }

      // // Pass the user data to the request object for further processing
      // req.user = decoded;

      // Call the next function with request and a new NextResponse
      return await next(req, NextResponse);
      
    } catch (error) {
      return NextResponse.json({ status: 401, message: "Invalid token" });
    }
  };
}
