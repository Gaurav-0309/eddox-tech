"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const navItemClass =
  "relative text-sm font-medium text-black-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full hover:text-blue-600";


  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 text-xl font-extrabold text-orange-500 tracking-wide">
          <span className="leading-none">EDDOX-TECHNOLOGY</span>
          <img src="/images/eddox-logo.jpg" alt="Eddox Technology Logo" className="logo w-15 h-15 object-contain" />
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8">

          <li className={navItemClass}>
  <Link href="/">Home</Link>
</li>

          <li className={navItemClass}>
      <Link href="/about-us">About Us</Link>
        </li>


          {/* COURSES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("courses")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            
            <span className={navItemClass}>
              <Link href="/courses">Courses ▾</Link>
              
            </span>

            {openMenu === "courses" && (
              <div className="absolute top-8 left-0 w-56 bg-white shadow-xl rounded-xl border p-2">
                {[
                  "SAP Courses",
                  "Salesforce",
                  "ERP Training",
                  "Full Stack",
                  "MS Excel",
                  "MS Powerpoint",
                  "python",
                  "java",
                  "Mobile Application Development",
                  "Digital Marketing",
                  "Network and Security",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li className={navItemClass}>
            <Link href="/corporate-training">Corporate Training</Link>
          </li>
          <li className={navItemClass}>
            <Link href="/online-registration">Online Registration</Link>
          </li>
          <li className={navItemClass}>
            <Link href="/talent-pool">Talent Pool to Hire</Link>
          </li>

          {/* OTHER DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("other")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className={navItemClass}>
              Other ▾
            </span>

            {openMenu === "other" && (
  <div className="absolute top-8 left-0 w-48 bg-white shadow-xl rounded-xl border p-2">
    {[
      { label: "Contact Us", href: "/contact-us" },
      { label: "Certificate", href: "/certificate" },
    ].map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={() => setOpenMenu(null)} // optional: closes menu
      >
        {item.label}
      </Link>
    ))}
  </div>
)}

          </li>
        </ul>

        
      </nav>
    </header>
  );
}
