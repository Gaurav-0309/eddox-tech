"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ApplyClient() {
  const searchParams = useSearchParams();
  const certificateType = searchParams.get("type");

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/certificate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        certificateType,
      }),
    });

    alert("Certificate request submitted");
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Apply for{" "}
        {certificateType === "internship"
          ? "Internship"
          : "Course Completion"}{" "}
        Certificate
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border w-full px-4 py-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Registered Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="border w-full px-4 py-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}
