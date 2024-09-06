import { NextRequest, NextResponse } from "next/server";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser,authenticateUser } from "@/services/userServices";
import { UUID } from "crypto";

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

// Public login route
export async function LOGIN(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const { user, token } = await authenticateUser(email, password);
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

// Get all users
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (userId) {
    // Get user by ID
    try {
      const user = await getUserById(userId as UUID);
      return NextResponse.json({
        status: 200,
        message: "User fetched successfully",
        data: user,
      });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({
        status: 404,
        message: error.message || "User not found",
      });
    }
  } else {
    // Get all users
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
}

// Update user
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body; // Assuming the ID is part of the body
    const user = await updateUser(id, updateData);
    return NextResponse.json({
      status: 200,
      message: "User updated successfully",
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

// Delete user
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json({
      status: 400,
      message: "User ID is required",
    });
  }

  try {
    const response = await deleteUser(userId as UUID);
    return NextResponse.json({
      status: 200,
      message: response.message,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
}
