"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItemClass =
    "relative text-sm font-medium text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-orange-500 tracking-wide">
            EDDOX‑TECHNOLOGY
          </span>
          <img
            src="/images/eddox-logo.jpg"
            alt="Eddox Technology Logo"
            className="w-18 h-18 object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
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
            <span className={navItemClass} > <Link href="/courses">Courses</Link></span>

            {openMenu === "courses" && (
              <div className="absolute top-8 left-0 w-56 bg-white shadow-xl rounded-xl border p-2">
                {[
                  "SAP Courses",
                  "Salesforce",
                  "ERP Training",
                  "Full Stack",
                  "Microsoft Excel",
                  "Microsoft Powerpoint",
                  "Python",
                  "Java",
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
            <span className={navItemClass}>Other</span>

            {openMenu === "other" && (
              <div className="absolute top-8 left-0 w-48 bg-white shadow-xl rounded-xl border p-2">
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/certificate"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                >
                  Certificate
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
  <div className="md:hidden bg-white border-t shadow-lg">
    <ul className="flex flex-col divide-y text-base font-medium">
      {[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Courses", href: "/courses" },
        { label: "Corporate Training", href: "/corporate-training" },
        { label: "Online Registration", href: "/online-registration" },
        { label: "Talent Pool to Hire", href: "/talent-pool" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Certificate", href: "/certificate" },
      ].map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

    </header>
  );
}
