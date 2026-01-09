import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CertificateRequest from "@/models/certificateRequest";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const type = searchParams.get("type");

    if (!email || !type) {
      return NextResponse.json(
        { success: false, message: "Missing parameters" },
        { status: 400 }
      );
    }

    const request = await CertificateRequest.findOne({
      email,
      certificateType: type,
    }).sort({ createdAt: -1 });

    if (!request) {
      return NextResponse.json({ success: true, data: null });
    }

    return NextResponse.json({
      success: true,
      data: {
        status: request.status,
        certificateUrl: request.certificateUrl,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
