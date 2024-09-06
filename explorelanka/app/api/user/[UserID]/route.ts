// app/api/[category]/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getUserById, updateUser } from '@/services/userServices';
import { UUID } from 'crypto';

export async function GET(request: NextRequest, { params }: { params: { UserID: string } }) {
    const {  UserID } = params;

      if (!UserID) {
    return NextResponse.json({
      status: 400,
      message: "User ID is required",
    });
  }

  try {
    const user = await getUserById(UserID as UUID);
    return NextResponse.json({
      status: 200,
      message: "User fetched successfully",
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

export async function PUT(req: NextRequest, { params }: { params: { UserID: string } }) {
  try {
    const body = await req.json();
    const {  UserID } = params;
    const user = await updateUser(UserID as UUID, body);
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
