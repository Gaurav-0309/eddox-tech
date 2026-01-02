"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminCertificatesPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await fetch("/api/certificate/apply");
        const data = await res.json();
        setRequests(data.data || []);
      } catch (error) {
        console.error("Failed to fetch certificate requests", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRequests();
  }, []);

  return (
    <>
      <AdminNavbar />

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Certificate Requests
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : requests.length === 0 ? (
          <p>No certificate requests found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">

  <tr>
    <th className="px-4 py-3 text-left">Name</th>
    <th className="px-4 py-3 text-left">Email</th>
    <th className="px-4 py-3 text-left">Phone</th>
    <th className="px-4 py-3 text-left">Course</th>
    <th className="px-4 py-3 text-left">Center</th>
    <th className="px-4 py-3 text-left">Faculty</th>
    <th className="px-4 py-3 text-left">Student ID</th>
    <th className="px-4 py-3 text-left">Start Date</th>
    <th className="px-4 py-3 text-left">End Date</th>
    <th className="px-4 py-3 text-left">Status</th>
    <th className="px-4 py-3 text-left">Applied On</th>
    <th className="px-4 py-3 text-left">Actions</th>
  </tr>
</thead>


              <tbody>
  {requests.map((req) => (
    <tr key={req._id} className="border-t hover:bg-gray-50">
      <td className="px-4 py-3">{req.name}</td>
      <td className="px-4 py-3">{req.email}</td>
      <td className="px-4 py-3">{req.phone}</td>
      <td className="px-4 py-3">{req.course}</td>
      <td className="px-4 py-3">{req.center}</td>
      <td className="px-4 py-3">{req.facultyName}</td>
      <td className="px-4 py-3">{req.studentId}</td>
      <td className="px-4 py-3">{req.startDate}</td>
      <td className="px-4 py-3">{req.endDate}</td>

      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            req.status === "Approved"
              ? "bg-green-100 text-green-700"
              : req.status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {req.status}
        </span>
      </td>

      <td className="px-4 py-3">
        {new Date(req.createdAt).toLocaleDateString()}
      </td>
      <td className="px-4 py-3 space-y-2 min-w-[220px]">
  {req.status === "Pending" && (
    <>
      {/* CERTIFICATE FILE INPUT */}
      <input
        type="text"
        placeholder="Certificate PDF path (e.g. /certificates/abc.pdf)"
        className="w-full border px-2 py-1 text-xs rounded"
        id={`cert-${req._id}`}
      />

      <div className="flex gap-2">
        {/* APPROVE */}
        <button
          onClick={async () => {
            const input = document.getElementById(`cert-${req._id}`);
            if (!input.value) {
              alert("Please enter certificate PDF path");
              return;
            }

            const res = await fetch("/api/admin/certificate/update", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: req._id,
                status: "Approved",
                certificateUrl: input.value,
              }),
            });

            if (res.ok) window.location.reload();
          }}
          className="bg-green-600 text-white px-3 py-1 rounded text-xs"
        >
          Approve
        </button>

        {/* REJECT */}
        <button
          onClick={async () => {
            const res = await fetch("/api/admin/certificate/update", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: req._id,
                status: "Rejected",
                rejectionReason:
                  "Your request has been rejected. Please contact support.",
              }),
            });

            if (res.ok) window.location.reload();
          }}
          className="bg-red-600 text-white px-3 py-1 rounded text-xs"
        >
          Reject
        </button>
      </div>
    </>
  )}

  {/* AFTER APPROVAL */}
  {req.status === "Approved" && req.certificateUrl && (
    <a
      href={req.certificateUrl}
      target="_blank"
      className="text-blue-600 text-xs underline"
    >
      View Certificate
    </a>
  )}

  {/* AFTER REJECTION */}
  {req.status === "Rejected" && (
    <span className="text-red-600 text-xs">
      Request Rejected
    </span>
  )}
</td>

    </tr>
  ))}
</tbody>

            </table>
          </div>
        )}
      </main>
    </>
  );
}
