import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import CertificateRequest from "@/models/certificateRequest";

// POST: submit certificate request
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const certificateRequest = await CertificateRequest.create(body);

    return NextResponse.json(
      { success: true, data: certificateRequest },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// GET: fetch all certificate requests (admin)
export async function GET() {
  try {
    await connectDB();
    const requests = await CertificateRequest.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: requests },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
