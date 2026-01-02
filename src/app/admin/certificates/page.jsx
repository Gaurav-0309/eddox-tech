"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminCertificatesPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});

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
      <td className="px-4 py-3 space-y-2 min-w-[240px]">
  {req.status === "Pending" && (
    <>
      {/* FILE UPLOAD */}
      <input
        type="file"
        accept="application/pdf"
        className="text-xs"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (!file) return;

          setUploading(true);

          const formData = new FormData();
          formData.append("file", file);

          const res = await fetch(
            "/api/admin/certificate/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await res.json();
          setUploading(false);

          if (data.success) {
            setUploadedFiles((prev) => ({
              ...prev,
              [req._id]: data.fileUrl,
            }));
          } else {
            alert("File upload failed");
          }
        }}
      />

      {uploadedFiles[req._id] && (
        <p className="text-green-600 text-xs">
          File uploaded
        </p>
      )}

      {/* APPROVE */}
      <button
        onClick={async () => {
          if (!uploadedFiles[req._id]) {
            alert("Please upload certificate first");
            return;
          }

          const res = await fetch(
            "/api/admin/certificate/update",
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: req._id,
                status: "Approved",
                certificateUrl: uploadedFiles[req._id],
              }),
            }
          );

          if (res.ok) window.location.reload();
        }}
        className="bg-green-600 text-white px-3 py-1 rounded text-xs"
      >
        {uploading ? "Uploading..." : "Approve"}
      </button>

      {/* REJECT */}
      <button
        onClick={async () => {
          const res = await fetch(
            "/api/admin/certificate/update",
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: req._id,
                status: "Rejected",
                rejectionReason:
                  "Your request has been rejected. Please contact support.",
              }),
            }
          );

          if (res.ok) window.location.reload();
        }}
        className="bg-red-600 text-white px-3 py-1 rounded text-xs"
      >
        Reject
      </button>
    </>
  )}

  {/* APPROVED */}
  {req.status === "Approved" && req.certificateUrl && (
    <a
      href={req.certificateUrl}
      target="_blank"
      className="text-blue-600 text-xs underline"
    >
      View Certificate
    </a>
  )}

  {/* REJECTED */}
  {req.status === "Rejected" && (
    <span className="text-red-600 text-xs">
      Rejected
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
