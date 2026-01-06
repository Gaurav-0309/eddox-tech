"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ApplyCertificatePage() {
  const searchParams = useSearchParams();
  const certificateType = searchParams.get("type");

  if (
    certificateType !== "internship" &&
    certificateType !== "course-completion"
  ) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Invalid certificate type
      </div>
    );
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    center: "",
    facultyName: "",
    studentId: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/certificate/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        certificateType,
      }),
    });

    alert("Request submitted");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full grid md:grid-cols-2 gap-10 p-10">
        
        {/* LEFT – CERTIFICATE IMAGE */}
        <div className="flex items-center justify-center">
          <div className="bg-blue-100 rounded-xl p-6">
            <Image
              src={
                certificateType === "internship"
                  ? "/certificates/internship-certificate.jpeg"
                  : "/certificates/course-completion.jpeg"
              }
              alt="Certificate Preview"
              width={420}
              height={300}
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Apply for Certificate
          </h1>

          <p className="text-gray-600 mb-8">
            Apply for your course certification today and showcase
            your expertise.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email Address
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Course</label>
              <input
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="Enter Course"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Center</label>
              <select
                name="center"
                value={form.center}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Choose a Center</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                Faculty Name
              </label>
              <input
                name="facultyName"
                value={form.facultyName}
                onChange={handleChange}
                placeholder="Enter Faculty Name"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Student ID Number
              </label>
              <input
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                placeholder="eg 2021/10145"
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="input"
                required
              />
            </div>

            <div className="md:col-span-2 flex gap-4 mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Request
              </button>

              <button
                type="reset"
                className="bg-gray-200 px-6 py-3 rounded-lg"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          padding: 0.75rem;
          margin-top: 0.25rem;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
        }
      `}</style>
    </main>
  );
}
