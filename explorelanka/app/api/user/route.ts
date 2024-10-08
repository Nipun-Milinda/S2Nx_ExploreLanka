import { NextResponse } from "next/server";
import { getAllUsers } from "@/services/userServices";

// Get all users
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
