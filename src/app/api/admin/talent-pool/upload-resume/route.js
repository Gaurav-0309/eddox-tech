import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("resume");

  if (!file) {
    return NextResponse.json(
      { error: "No file uploaded" },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(
    process.cwd(),
    "public/uploads/resumes"
  );

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({
    resumeUrl: `/uploads/resumes/${fileName}`,
  });
}
