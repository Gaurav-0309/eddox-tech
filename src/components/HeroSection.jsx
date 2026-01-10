export const metadata = {
  title: "Best IT Training Institute in India | EDDOX Technology",
  description:
    "EDDOX Technology is the best IT training institute in India offering courses in Full Stack Development, SAP, Data Science, Python and more with placement support.",
  keywords: [
    "IT training institute in India",
    "Full stack Development courses ",
    "SAP training courses",
    "Data science courses ",
    "Digital Marketing courses",
    "SAP Success Factors training",
    "Salesforce training courses",
    "HR & Business Analytics courses",
    "Microsoft Tools",
    "Microsoft Azure courses",
  ],
};


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import courses from "@/data/courses"; 




export default function HeroSection() {
  
  const courseTitles = courses.map((c) => c.title);
  
  const fullText = "  Your Gateway to the Best IT Training in India";
  const [displayText, setDisplayText] = useState("");
  
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  
  
  const handleSearchChange = (e) => {
  const value = e.target.value;
  setSearch(value);

  if (!value.trim()) {
    setSuggestions([]);
    return;
  }

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(value.toLowerCase())
  );

  setSuggestions(filtered.slice(0, 8)); // show max 8
};


  useEffect(() => {
    let idx = 0;
    let mounted = true;
    let timeoutId = null;
    
    const tick = () => {
      if (!mounted) return;
      if (idx < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(idx));
        idx += 1;
        timeoutId = setTimeout(tick, 50);
      } else {
        setDisplayText(fullText);
      }
    };
    
    timeoutId = setTimeout(tick, 50);
    
    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText]);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Your One-Stop Tech 
            Learning Hub <br />
            <span className="text-gray-900">
              - Courses, Practice,
            </span>
          </h1>

          <p className="mt-6 text-3xl font-semibold text-blue-600">
            Certifications & Career Support
          </p>

          <p className="mt-2 text-gray-600 max-w-md">
            <span className="typing-text">{displayText}</span>
            <span className="typing-caret" aria-hidden>
              |
            </span>
          </p>

          {/* Search */}
          <div className="relative w-full max-w-2xl mx-auto border rounded-lg mt-8 flex shadow">
            

  <input
    value={search}
    onChange={handleSearchChange}
    placeholder="Search courses"
    className="flex-1 px-4 py-3 outline-none"
  />

  {suggestions.length > 0 && (
    <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
      {suggestions.map((course, index) => (
        <div
          key={index}
          onClick={() =>
            router.push(`/courses?search=${encodeURIComponent(course.title)}`)
          }
          className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
        >
          {course.title}
        </div>
      ))}
    </div>
  )}

            <button onClick={() => {
    if (!search.trim()) return;
    router.push(`/courses?search=${encodeURIComponent(search)}`);
  }} 
  className="bg-blue-600 text-white px-6 font-medium hover:bg-blue-700 transition">
              Search
            </button>
        </div>
</div>

        {/* RIGHT */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -top-14 -right-14 w-[480px] h-[480px] bg-orange-400/30 rounded-full blur-3xl -z-10" />

          <div className="h-[480px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/students image.jpg"
              alt="Students learning"
              className="w-full h-full object-cover object-center rounded-2xl shadow-xl"
            />
          </div>
        </div>

      </div>
      
      {/* STATS SECTION (moved from index.html) */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-globe-americas" /></div>
            <div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience in IT Education</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-laptop-code" /></div>
            <div>
              <div className="stat-number">99+</div>
              <div className="stat-label">IT Modules Covered</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-users" /></div>
            <div>
              <div className="stat-number">100+</div>
              <div className="stat-label">IT Certified Teachers and Professionals</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-book-reader" /></div>
            <div>
              <div className="stat-number">10000+</div>
              <div className="stat-label">Learners Enrolled in IT Courses</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
