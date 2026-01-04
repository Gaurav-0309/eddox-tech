"use client";
import { useState } from "react";

import Image from "next/image";

export default function ApplyCertificatePage() {
  const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: CERTIFICATE PREVIEW */}
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 p-6 shadow-md">
                <Image
                  src="/images/certificate.jpeg"
                  alt="Certificate Preview"
                  width={420}
                  height={600}
                  className="rounded-xl object-contain bg-white"
                />
              </div>
            </div>

            {/* RIGHT: APPLY FORM */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
                Apply for Certificate
              </h1>
              <p className="text-gray-600 mb-8">
                Apply for your course certification today and showcase your expertise.
              </p>

              <form
  onSubmit={async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      course: e.target.course.value,
      center: e.target.center.value,
      facultyName: e.target.facultyName.value,
      studentId: e.target.studentId.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };

    try {
      const res = await fetch("/api/certificate/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.message || "All required information must be filled correctly."
        );
      } else {
        setSuccess(
          "Your certificate request has been submitted successfully."
        );
        e.target.reset();
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>



                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course
                  </label>
                  <input
                    name="course"
                    type="text"
                    placeholder="Enter Course"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Center */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Center
                  </label>
                  <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="center">
                    <option>Choose a Center</option>
                    <option>Delhi</option>
                    <option>Noida</option>
                    <option>Gurgaon</option>
                  </select>
                </div>

                {/* Faculty */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Faculty Name
                  </label>
                  <input
                    name="facultyName"
                    type="text"
                    placeholder="Enter Faculty Name"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Student ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    EddoxTechnology Student ID Number
                  </label>
                  <input
                    name="studentId"
                    type="text"
                    placeholder="eg 2021/10145"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    type="date"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    name="endDate"
                    type="date"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* ERROR MESSAGE */}
{error && (
  <div className="md:col-span-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
    {error}
  </div>
)}

{/* SUCCESS MESSAGE */}
{success && (
  <div className="md:col-span-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
    {success}
  </div>
)}


                {/* BUTTONS */}
                <div className="md:col-span-2 flex gap-4 mt-6">
                  <button
  type="submit"
  disabled={loading}
  className={`px-8 py-3 rounded-lg font-medium transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-700 hover:bg-blue-800 text-white"
  }`}
>
  {loading ? "Submitting..." : "Send Request"}
</button>


                  <button
                    type="reset"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium transition"
                  >
                    Reset
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
