import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    course: String,
    amount: Number,
    paymentType: String,
    razorpayOrderId: String,
    razorpayPaymentId: String,
    status: {
      type: String,
      default: "Paid",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
