import { NextResponse } from "next/server";
import { getAllVisas, createVisa } from "@/services/visaServices";

export async function GET() {
  
    try {
      const visas = await getAllVisas();
      return NextResponse.json({
        status: 200,
        message: "Visas fetched successfully",
        data: visas,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        message: "Internal server error",
      });
    }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const visa = await createVisa(data);
    return NextResponse.json({
      status: 201,
      message: "Visa created successfully",
      data: visa,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}