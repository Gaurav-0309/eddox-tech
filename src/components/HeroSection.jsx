"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function HeroSection() {
  const fullText = "  Your Gateway to the Best IT Training in India";
  const [displayText, setDisplayText] = useState("");

  const [search, setSearch] = useState("");
  const router = useRouter();


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
          <div className="mt-8 flex max-w-md shadow-lg rounded-lg overflow-hidden">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses"
              className="flex-1 px-4 py-3 outline-none"
            />
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
