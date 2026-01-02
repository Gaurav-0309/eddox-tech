import mongoose from "mongoose";

const CertificateRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    center: {
      type: String,
      required: true,
    },
    facultyName: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    status: {
  type: String,
  enum: ["Pending", "Approved", "Rejected"],
  default: "Pending",
},
certificateUrl: {
  type: String,
  default: "",
},
rejectionReason: {
  type: String,
  default: "",
},
approvedAt: Date,

  },
  { timestamps: true }
);

export default mongoose.models.CertificateRequest ||
  mongoose.model("CertificateRequest", CertificateRequestSchema);
