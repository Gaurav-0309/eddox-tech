export const runtime = "nodejs";

import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Payment from "@/models/Payment";
import nodemailer from "nodemailer";

function generateReceiptHTML(data) {
  return `
    <div style="font-family: Arial, sans-serif; padding:20px;">
      <h2>EDDOX Technology - Payment Receipt</h2>
      <hr/>
      <p><b>Name:</b> ${data.firstName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.mobileNumber}</p>
      <p><b>Course:</b> ${data.course}</p>
      <p><b>Amount:</b> ₹${data.amount}</p>
      <p><b>Payment Type:</b> ${data.paymentType}</p>
      <p><b>Razorpay Payment ID:</b> ${data.razorpay_payment_id}</p>
      <p><b>Razorpay Order ID:</b> ${data.razorpay_order_id}</p>
      <p><b>Date:</b> ${new Date().toLocaleString()}</p>
      <hr/>
      <p>Thank you for enrolling with EDDOX Technology.</p>
    </div>
  `;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userData, // coming from frontend
    } = body;

    // ✅ Razorpay Signature Verification (UNCHANGED)
    const sign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (sign !== razorpay_signature) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // ✅ Save to DB (UNCHANGED)
    await connectDB();

    await Payment.create({
      name: userData.firstName,
      email: userData.email,
      phone: userData.mobileNumber,
      course: userData.course,
      amount: userData.amount,
      paymentType: userData.paymentType,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      status: "Paid",
    });

    // ✅ SEND EMAIL RECEIPT (NEW PART)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.RECEIPT_EMAIL,
        pass: process.env.RECEIPT_EMAIL_PASS,
      },
    });

    const receiptHTML = generateReceiptHTML({
      ...userData,
      razorpay_order_id,
      razorpay_payment_id,
    });


    try {

    await transporter.sendMail({
      from: `EDDOX Technology <${process.env.RECEIPT_EMAIL}>`,
      to: userData.email,
      subject: "Payment Receipt - EDDOX Technology",
      html: receiptHTML,
    });
    console.log("Receipt email sent successfully");
  } catch (emailErr) {
    console.error("Error failed:", emailErr);
  }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
