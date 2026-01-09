import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CertificateRequest from "@/models/certificateRequest";

export async function PATCH(req) {
  try {
    await connectDB();
    const { id, status, certificateUrl, rejectionReason } = await req.json();

    const update = { status };

    if (status === "Approved") {
      update.certificateUrl = certificateUrl;
      update.approvedAt = new Date();
      update.rejectionReason = "";
    }

    if (status === "Rejected") {
      update.rejectionReason =
        rejectionReason || "Request does not meet criteria";
      update.certificateUrl = "";
    }

    await CertificateRequest.findByIdAndUpdate(id, update);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
