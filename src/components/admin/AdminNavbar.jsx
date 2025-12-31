"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Registrations", href: "/admin/registrations" },
    { name: "Talent Pool", href: "/admin/talent-pool" },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      router.push("/admin/login");
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left */}
      <div className="text-lg font-semibold">
        Admin Panel
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium ${
              pathname === item.href
                ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* 🔴 LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-400 hover:text-red-300 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
