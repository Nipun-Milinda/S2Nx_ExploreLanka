import { NextRequest, NextResponse } from "next/server";
import {
  createVisaApplication,
  getVisaApplication,
  updateVisaApplication,
  deleteVisaApplication,
  QueryParams,
} from "@/services/visaApplicationServices";
import { UUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      visaApplication,
      userContact,
      passport,
      userProfession,
      userSpouse,
    } = body;
    console.log("Request Body:", body);

    const newVisaApplication = await createVisaApplication(
      visaApplication,
      userContact,
      passport,
      userProfession,
      userSpouse
    );
    console.log("Created Visa Application:", newVisaApplication);

    return NextResponse.json({
      status: 200,
      message: "Visa Application created successfully",
      data: newVisaApplication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req?.url);
    const visaApplications = await getVisaApplication(
      searchParams as QueryParams
    );
    return NextResponse.json({
      status: 200,
      message: "Visa Applications fetched successfully",
      data: visaApplications,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request Body:", body);

    const updatedVisaApplication = await updateVisaApplication(body);
    console.log("Updated Visa Application:", updatedVisaApplication);

    

    return NextResponse.json({
      status: 200,
      message: "Visa Application updated successfully",
      data: updatedVisaApplication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req?.url);
    const deletedVisaApplication = await deleteVisaApplication(
      searchParams?.get("id") as UUID
    );
    return NextResponse.json({
      status: 200,
      message: "Visa Application deleted successfully",
      data: deletedVisaApplication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
