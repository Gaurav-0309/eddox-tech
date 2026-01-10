export const metadata = {
  title: "Hire Trained IT Students in India | Talent Pool – EDDOX Technology",
  description:
    "Hire job‑ready IT students from EDDOX Technology’s talent pool in India. Get trained candidates in Full Stack, SAP, Data Science and other technologies for your company.",
  keywords: [
    "hire IT freshers in India",
    "software developers for hire India",
    "IT talent pool India",
    "hire trained students India",
    "EDDOX Technology placement hiring",
  ],
};


"use client";

import { useEffect, useState } from "react";

export default function TalentPoolPage() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await fetch("/api/talent-pool");
        const data = await res.json();
        setResumes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch resumes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  // FILTER LOGIC
  const filteredResumes = resumes.filter((r) => {
    const searchMatch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.role.toLowerCase().includes(search.toLowerCase()) ||
      (r.skills || "").toLowerCase().includes(search.toLowerCase());

    const roleMatch = !role || r.role === role;
    const expMatch =
      !experience ||
      (experience === "Fresher" && r.experience?.includes("0")) ||
      (experience === "1-2 Years" && r.experience?.includes("1")) ||
      (experience === "3+ Years" && r.experience?.includes("3"));

    return searchMatch && roleMatch && expMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium">
          Talent Pool to Hire
        </span>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">
        Talent Pool to Hire
      </h1>

      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow mb-8">
        <p className="text-sm text-gray-600">
          Showing <strong>{filteredResumes.length}</strong> Candidates
        </p>

        <input
          type="text"
          placeholder="Search by name, role or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-64"
        />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="bg-white p-5 rounded-xl shadow sticky top-24 h-fit">

          <h3 className="font-semibold mb-4">Filter By</h3>

          {/* Role */}
          <p className="text-sm font-medium mb-2">Role</p>
          {["Full Stack Developer", "Data Scientist", "Digital Marketer"].map(
            (r) => (
              <label key={r} className="flex items-center gap-2 text-sm mb-2">
                <input
                  type="radio"
                  name="role"
                  checked={role === r}
                  onChange={() => setRole(r)}
                />
                {r}
              </label>
            )
          )}
          <button
            onClick={() => setRole("")}
            className="text-xs text-blue-600 mb-4"
          >
            Clear role
          </button>

          <hr className="my-4" />

          {/* Experience */}
          <p className="text-sm font-medium mb-2">Experience</p>
          {["Fresher", "1-2 Years", "3+ Years"].map((exp) => (
            <label key={exp} className="flex items-center gap-2 text-sm mb-2">
              <input
                type="radio"
                name="experience"
                checked={experience === exp}
                onChange={() => setExperience(exp)}
              />
              {exp}
            </label>
          ))}
          <button
            onClick={() => setExperience("")}
            className="text-xs text-blue-600"
          >
            Clear experience
          </button>
        </aside>

        {/* Cards */}
        <section className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <p className="text-gray-500">Loading candidates...</p>
          )}

          {!loading && filteredResumes.length === 0 && (
            <p className="text-gray-500">
              No candidates match your filters.
            </p>
          )}

          {filteredResumes.map((r) => (
            <article className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">


              {/* Card Header */}
              <div className="relative h-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
    AVAILABLE
  </span>

  {/* Avatar initials */}
  <div className="absolute bottom-[-24px] left-5 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold text-indigo-600">
    {r.name.charAt(0).toUpperCase()}
  </div>
</div>


              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">

                <h2 className="text-lg font-semibold mb-1">
                  {r.name}
                </h2>

                <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-2 w-fit">
  {r.role}
</span>


                <div className="text-sm text-gray-600 space-y-2 mb-4">
  <p>
    <span className="font-medium text-gray-800">Experience:</span>{" "}
    {r.experience}
  </p>

  <p className="line-clamp-2">
    <span className="font-medium text-gray-800">Skills:</span>{" "}
    {r.skills}
  </p>
</div>


                <a
  href={r.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
>
  📄 Download Resume
</a>

              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
