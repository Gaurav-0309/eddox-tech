import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Registration from "@/models/Registration";

// ✅ GET: Fetch all registrations (Admin)
export async function GET() {
  try {
    await connectDB();
    const registrations = await Registration.find().sort({
      createdAt: -1,
    });
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("GET registrations error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function DELETE(req) {
  const { id } = await req.json();

  await Registration.findByIdAndDelete(id);

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}


// ✅ POST: Create new registration (Public)
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      name,
      email,
      phone,
      course,
      branch,
      address,
      city,
      country,
      zipcode,
      amount,
    } = body;

    // Basic validation
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    await Registration.create({
      name,
      email,
      phone,
      course,
      branch,
      address,
      city,
      country,
      zipcode,
      amount,
    });

    return NextResponse.json(
      { success: true, message: "Registration saved" },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST registration error:", error);
    return NextResponse.json(
      { success: false, message: "Registration failed" },
      { status: 500 }
    );
  }
}
