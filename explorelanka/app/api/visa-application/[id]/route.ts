import { NextResponse } from "next/server";
import { getVisaApplicationById } from "@/services/visaApplicationServices";
import { NextRequest } from "next/server";
import { UUID } from "crypto";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    console.log("Visa Application ID:", id);

    if (!id) {
      return NextResponse.json({
        status: 400,
        message: "Visa Application ID is required",
      });
    }

    const visaApplication = await getVisaApplicationById(id as UUID);

    if (!visaApplication) {
      return NextResponse.json({
        status: 404,
        message: "Visa Application not found",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Visa Application fetched successfully",
      data: visaApplication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
