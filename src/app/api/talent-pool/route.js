import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Resume from "@/models/Resume";

export async function GET() {
  try {
    await dbConnect();
    const resumes = await Resume.find().sort({ createdAt: -1 });
    return NextResponse.json(resumes);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const resume = await Resume.create(body);
    return NextResponse.json(resume, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { message: "Failed to add resume" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const { id } = await request.json();
    await Resume.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { message: "Failed to delete resume" },
      { status: 500 }
    );
  }
}
