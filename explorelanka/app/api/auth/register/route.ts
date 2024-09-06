import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/services/userServices";

// Create a new user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await createUser(body);
    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
}