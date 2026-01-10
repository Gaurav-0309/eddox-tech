export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Payment from "@/models/Payment";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("paymentId");

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID missing" }, { status: 400 });
    }

    await connectDB();

    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return NextResponse.json({ error: "Receipt not found" }, { status: 404 });
    }

    const receiptHTML = `
      <html>
        <head>
          <title>Payment Receipt</title>
        </head>
        <body style="font-family: Arial; padding:30px;">
          <h2>EDDOX Technology - Payment Receipt</h2>
          <hr/>
          <p><b>Name:</b> ${payment.name}</p>
          <p><b>Email:</b> ${payment.email}</p>
          <p><b>Phone:</b> ${payment.phone}</p>
          <p><b>Course:</b> ${payment.course}</p>
          <p><b>Amount:</b> ₹${payment.amount}</p>
          <p><b>Payment ID:</b> ${payment.razorpayPaymentId}</p>
          <p><b>Date:</b> ${new Date(payment.createdAt).toLocaleString()}</p>
          <hr/>
          <p>Thank you for enrolling with EDDOX Technology.</p>
        </body>
      </html>
    `;

    return new NextResponse(receiptHTML, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": "attachment; filename=receipt.html",
      },
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
