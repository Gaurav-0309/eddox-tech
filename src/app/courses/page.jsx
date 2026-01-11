"use client";
// export const metadata = {
//   title: "IT Courses in India | Full Stack, SAP, Data Science – EDDOX Technology",
//   description:
//     "Explore all IT courses offered by EDDOX Technology in India including Full Stack Development, SAP, Data Science, Python and more with placement support.",
//   keywords: [
//     "IT courses in India",
//     "software courses in India",
//     "full stack course in India",
//     "SAP training institute India",
//     "data science course in India",
//     "computer courses India",
//   ],
// };


import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


import coursesData from "@/data/courses";


function CoursesContent() {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
const urlSearch = searchParams.get("search") || "";
const [search, setSearch] = useState(urlSearch);
const categoryFromUrl = searchParams.get("category");


  const COURSES_PER_PAGE = 6;

  // 🔹 FILTER LOGIC (UNCHANGED)
  const filteredCourses = coursesData.filter((course) => {

    
    const activeCategory = categoryFromUrl || selectedCategory;

const categoryMatch =
  !activeCategory ||
  course.category
    ?.toLowerCase()
    .includes(activeCategory.toLowerCase());


    const levelMatch =
      !selectedLevel ||
      course.level?.toLowerCase() === selectedLevel.toLowerCase();

    const searchMatch =
      course.title?.toLowerCase().includes(search.toLowerCase()) ||
      course.description
        ?.toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && levelMatch && searchMatch;
  });

  // 🔹 RESET PAGE WHEN FILTERS CHANGE
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevel, search]);

  // 🔹 PAGINATION LOGIC
  const totalPages = Math.ceil(
    filteredCourses.length / COURSES_PER_PAGE
  );

  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;

  const paginatedCourses = filteredCourses.slice(
    startIndex,
    endIndex
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium ">Courses</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow mb-8">

        <p className="text-sm text-gray-600">
          Showing <strong>{filteredCourses.length < 6 ? filteredCourses.length : 6}</strong>{" "}
          Courses
        </p>


        {/* Pagination */}
      {totalPages > 1 && (
  <div className="flex items-center gap-2">
    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="h-10 px-4 text-sm border rounded-md flex items-center justify-center disabled:opacity-50"
    >
      Prev
    </button>

    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`h-10 min-w-[40px] px-4 text-sm border rounded-md flex items-center justify-center ${
          currentPage === i + 1
            ? "bg-blue-600 text-white border-blue-600"
            : ""
        }`}
      >
        {i + 1}
      </button>
    ))}

    <button
      onClick={() =>
        setCurrentPage((p) => Math.min(p + 1, totalPages))
      }
      disabled={currentPage === totalPages}
      className="h-10 px-4 text-sm border rounded-md flex items-center justify-center disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}


        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-48"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white p-5 rounded-lg shadow h-fit">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {[
              "SAP",
              "Full Stack Developer",
              "Data Science",
              "Digital Marketing",
              "Workday",
              "Salesforce",
              "Microsoft Azure",
              "HR & Business Analytics",
              "Microsoft Tools",
              "Security",
              "SAP Success Factor"
            ].map((cat) => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                {cat}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelectedCategory("")}
            className="text-xs text-blue-600 mt-3"
          >
            Clear category
          </button>

          <hr className="my-6" />

          <h3 className="font-semibold mb-4">Level</h3>
          <ul className="space-y-2 text-sm">
            {["Beginner", "Intermediate", "Advanced"].map(
              (lvl) => (
                <li key={lvl} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="level"
                    checked={selectedLevel === lvl}
                    onChange={() => setSelectedLevel(lvl)}
                  />
                  {lvl}
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => setSelectedLevel("")}
            className="text-xs text-blue-600 mt-3"
          >
            Clear level
          </button>
        </aside>

        {/* Courses Grid */}
        <section className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.length === 0 && (
            <p className="col-span-full text-gray-500">
              No courses match your filters.
            </p>
          )}

          {paginatedCourses.map((course) => (
            <article
              key={course.slug}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Card Header */}
              <div className="relative h-40 bg-gradient-to-r from-blue-500 to-indigo-500">
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </span>
                <img
  src={course.image}
  alt={course.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

              </div>

              {/* Card Content */}
              <div className="p-5">
                <h2 className="font-semibold text-lg mb-2">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>

                {/* <p className="text-xs text-gray-500 mb-3">
                  <strong>Level:</strong> {course.level}
                </p> */}

                {/* <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                  Details
                </button> */}
              </div>
            </article>
          ))}
        </section>
      </div>

      
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}

