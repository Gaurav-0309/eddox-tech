import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  // Remove admin auth cookie
  response.cookies.set("admin_auth", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return response;
}
