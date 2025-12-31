import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
    },
    experience: {
      type: String,
    },
    resumeUrl: {
      type: String, // /resumes/john-doe.pdf
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Resume ||
  mongoose.model("Resume", ResumeSchema);
