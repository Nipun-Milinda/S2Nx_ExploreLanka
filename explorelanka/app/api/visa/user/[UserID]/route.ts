import { NextRequest, NextResponse } from "next/server";
import { getVisaByUserId } from "@/services/visaServices";
import { UUID } from "crypto";

export async function GET(request: NextRequest, { params }: { params: { UserID: string } }) {
  const { UserID } = params;

  if (!UserID) {
    return NextResponse.json({
      status: 400,
      message: "User ID is required",
    });
  }

  try {
    const visa = await getVisaByUserId(UserID as UUID);
    return NextResponse.json({
      status: 200,
      message: "Visa fetched successfully",
      data: visa,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
}