import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import CertificateRequest from "@/models/certificateRequest";

// CREATE CERTIFICATE REQUEST (USER)
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const request = await CertificateRequest.create(body);

    return NextResponse.json(
      { success: true, data: request },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST certificate error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to apply" },
      { status: 500 }
    );
  }
}

// GET CERTIFICATE REQUESTS (ADMIN - WITH FILTER)
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    const query = type ? { certificateType: type } : {};

    const requests = await CertificateRequest.find(query).sort({
      createdAt: -1,
    });

    return NextResponse.json(
      { success: true, data: requests },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET certificate error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch" },
      { status: 500 }
    );
  }
}

// DELETE CERTIFICATE REQUEST (ADMIN)
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    await CertificateRequest.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE certificate error:", error);
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}
