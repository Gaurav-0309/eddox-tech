import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = await req.json();

  const sign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (sign !== razorpay_signature) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // 👉 Save payment to DB later

  return NextResponse.json({ success: true });
}
