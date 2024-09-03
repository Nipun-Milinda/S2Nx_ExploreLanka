import { NextRequest, NextResponse } from "next/server";
import { createUser, getAllUsers } from "@/services/userServices";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request Body:', body);

    const user = await createUser(body);
    console.log('Created User:', user);

    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json({
      status: 200,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
