import { NextRequest, NextResponse } from "next/server";
import { getVisaById, updateVisaStatus } from "@/services/visaServices";
import { UUID } from "crypto";

export async function GET(request: NextRequest, { params }: { params: { VisaID: string } }) {
  const { VisaID } = params;

  if (!VisaID) {
    return NextResponse.json({
      status: 400,
      message: "Visa ID is required",
    });
  }

  try {
    const visa = await getVisaById(VisaID as UUID);
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

export async function PUT(request: NextRequest, { params }: { params: { VisaID: string } }) {
    const { VisaID } = params;
    
    if (!VisaID) {
        return NextResponse.json({
        status: 400,
        message: "Visa ID is required",
        });
    }
    
    try {
        const data = await request.json();
        const visa = await updateVisaStatus(VisaID as UUID, data.VisaStatus);
        return NextResponse.json({
        status: 200,
        message: "Visa status updated successfully",
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
