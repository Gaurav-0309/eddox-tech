import "dotenv/config";   // 👈 ADD THIS LINE
import bcrypt from "bcryptjs";
import connectDB from "../src/lib/db.js";
import Admin from "../src/models/Admin.js";

async function createAdmin() {
  await connectDB();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@eddox.com",
    password: hashedPassword,
  });

  console.log("✅ Admin created successfully");
  process.exit();
}

createAdmin();
