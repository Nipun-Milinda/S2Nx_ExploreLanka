// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import sequelize from "./database/db-connection";
import { roleBasedAuth } from "./middleware/roleBasedAuth";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function middleware(req: NextRequest) {
  console.log("Request:", req.url);
  const url = req?.url;

  if (url.includes("/api/auth")) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    console.log("decoding...");
    const decoded = jwt?.decode(token);
    console.log("decoded: ", decoded);
    
    // Check for role authorization
    if (req?.method === "PUT" || req?.method === "DELETE") {
      if (decoded?.Role !== "Admin") {
        return NextResponse.json({ status: 403, message: "Forbidden" });
      }
    }

    return NextResponse.next();
    
  } catch (error) {
    return NextResponse.json({ status: 401, message: error });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
