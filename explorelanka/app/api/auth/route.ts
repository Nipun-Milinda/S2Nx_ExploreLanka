import { NextRequest, NextResponse } from "next/server";
import { createUser, authenticateUser } from "@/services/userServices";
import { roleBasedAuth } from "@/middleware/roleBasedAuth";

// Public login route
export async function POST(req: NextRequest) {
  try {
    const { Email, Password } = await req.json();
    const { user, token } = await authenticateUser(Email, Password);
    return NextResponse.json({
      status: 200,
      message: "Login successful",
      data: { user, token },
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 401,
      message: error.message,
    });
  }
}
