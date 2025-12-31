"use client";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { useEffect, useState } from "react";

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await fetch("/api/registrations");
        const data = await res.json();
        setRegistrations(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch registrations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div>
      <AdminNavbar />
      
      <h1 className="text-2xl font-bold mb-6">
        Online Registrations
      </h1>

      {loading && (
        <p className="text-gray-500">Loading registrations...</p>
      )}

      {!loading && registrations.length === 0 && (
        <p className="text-gray-500">No registrations found.</p>
      )}

      {!loading && registrations.length > 0 && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Course</th>
                <th className="p-4">Branch</th>
                <th className="p-4">Address</th>
                <th className="p-4">City</th>
                <th className="p-4">Country</th>
                <th className="p-4">ZIP</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {registrations.map((r) => (
                <tr
                  key={r._id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4">{r.name}</td>
                  <td className="p-4">{r.email}</td>
                  <td className="p-4">{r.phone}</td>
                  <td className="p-4">{r.course}</td>
                  <td className="p-4">{r.branch}</td>
                  <td className="p-4">{r.address}</td>
                  <td className="p-4">{r.city}</td>
                  <td className="p-4">{r.country}</td>
                  <td className="p-4">{r.zip}</td>
                  <td className="p-4 font-medium">
                    ₹{r.amount}
                  </td>
                  <td className="p-4 text-gray-500">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
