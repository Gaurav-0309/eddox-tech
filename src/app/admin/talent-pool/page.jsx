"use client";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { useEffect, useState } from "react";

export default function AdminTalentPoolPage() {
  const [resumes, setResumes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    skills: "",
    experience: "",
    resumeUrl: "",
  });

  // Fetch resumes
const fetchResumes = async () => {
  try {
    const res = await fetch("/api/talent-pool");
    const data = await res.json();
    setResumes(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Fetch resumes error:", error);
    setResumes([]);
  }
};


  useEffect(() => {
    fetchResumes();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/talent-pool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      name: "",
      role: "",
      skills: "",
      experience: "",
      resumeUrl: "",
    });

    fetchResumes();
  };

  // Delete resume
  const deleteResume = async (id) => {
    await fetch("/api/talent-pool", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchResumes();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <AdminNavbar />
      <h1 className="text-2xl font-bold mb-6">
        Admin – Talent Pool
      </h1>

      {/* Add Resume Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-10 space-y-4"
      >
        <h2 className="font-semibold text-lg">Add Candidate</h2>

        <input
          type="text"
          placeholder="Candidate Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Role (e.g. Full Stack Developer)"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Skills (React, Node, MongoDB)"
          value={form.skills}
          onChange={(e) =>
            setForm({ ...form, skills: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="text"
          placeholder="Experience (e.g. 2 Years)"
          value={form.experience}
          onChange={(e) =>
            setForm({ ...form, experience: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="text"
          placeholder="Resume URL (/resumes/john-doe.pdf)"
          value={form.resumeUrl}
          onChange={(e) =>
            setForm({ ...form, resumeUrl: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Add Candidate
        </button>
      </form>

      {/* Resume List */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">All Candidates</h2>

        {resumes.map((r) => (
          <div
            key={r._id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-gray-600">{r.role}</p>
              <p className="text-sm text-gray-500">
                {r.experience}
              </p>
            </div>

            <button
              onClick={() => deleteResume(r._id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
