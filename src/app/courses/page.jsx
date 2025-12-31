"use client";

import { useState } from "react";
import coursesData from "@/data/courses";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [search, setSearch] = useState("");

  // FILTER LOGIC
  const filteredCourses = coursesData.filter((course) => {
    const categoryMatch =
      !selectedCategory || course.category === selectedCategory;

    const levelMatch =
      !selectedLevel || course.level === selectedLevel;

    const searchMatch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && levelMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium">Courses</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow mb-8">
        <p className="text-sm text-gray-600">
          Showing <strong>{filteredCourses.length}</strong> Courses
        </p>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-48"
        />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white p-5 rounded-lg shadow h-fit">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {["Full Stack Developer", "Data Science", "Digital Marketing"].map(
              (cat) => (
                <li key={cat} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />
                  {cat}
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => setSelectedCategory("")}
            className="text-xs text-blue-600 mt-2"
          >
            Clear category
          </button>

          <hr className="my-5" />

          <h3 className="font-semibold mb-3">Level</h3>
          <ul className="space-y-2 text-sm">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <li key={lvl} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="level"
                  checked={selectedLevel === lvl}
                  onChange={() => setSelectedLevel(lvl)}
                />
                {lvl}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelectedLevel("")}
            className="text-xs text-blue-600 mt-2"
          >
            Clear level
          </button>
        </aside>

        {/* Courses Grid */}
        <section className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length === 0 && (
            <p className="col-span-full text-gray-500">
              No courses match your filters.
            </p>
          )}

          {filteredCourses.map((course) => (
            <article
              key={course.slug}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Card Header */}
              <div className="relative h-40 bg-gradient-to-r from-blue-500 to-indigo-500">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </span>

                <img
                  src={course.image}
                  alt={`${course.title} course training`}
                  className="absolute right-3 bottom-3 h-20 opacity-80"
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

                <p className="text-xs text-gray-500 mb-3">
                  <strong>Level:</strong> {course.level}
                </p>

                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                  Details
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
