"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminCertificatesPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Fetch certificate requests
  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/certificate/apply");
      const data = await res.json();
      setRequests(data?.data || []);
    } catch (error) {
      console.error("Failed to fetch certificate requests", error);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Upload certificate PDF
  const uploadCertificate = async (file, requestId) => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/certificate/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (data.success) {
      setUploadedFiles((prev) => ({
        ...prev,
        [requestId]: data.fileUrl,
      }));
    } else {
      alert("File upload failed");
    }
  };

  // Approve request
  const approveRequest = async (reqId) => {
    if (!uploadedFiles[reqId]) {
      alert("Please upload certificate first");
      return;
    }

    await fetch("/api/admin/certificate/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: reqId,
        status: "Approved",
        certificateUrl: uploadedFiles[reqId],
      }),
    });

    fetchRequests();
  };

  // Reject request
  const rejectRequest = async (reqId) => {
    await fetch("/api/admin/certificate/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: reqId,
        status: "Rejected",
        rejectionReason:
          "Your request has been rejected. Please contact support.",
      }),
    });

    fetchRequests();
  };

  // Delete request
  const deleteRequest = async (reqId) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this certificate request?"
    );
    if (!confirmDelete) return;

    const res = await fetch("/api/certificate/apply", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: reqId }),
    });

    if (res.ok) {
      setRequests((prev) => prev.filter((r) => r._id !== reqId));
    } else {
      alert("Failed to delete request");
    }
  };

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
                  <tr
                    key={req._id}
                    className="border-t hover:bg-gray-50"
                  >
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
                          <input
                            type="file"
                            accept="application/pdf"
                            className="text-xs"
                            onChange={(e) =>
                              uploadCertificate(
                                e.target.files[0],
                                req._id
                              )
                            }
                          />

                          {uploadedFiles[req._id] && (
                            <p className="text-green-600 text-xs">
                              File uploaded
                            </p>
                          )}

                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() =>
                                approveRequest(req._id)
                              }
                              className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                            >
                              {uploading
                                ? "Uploading..."
                                : "Approve"}
                            </button>

                            <button
                              onClick={() =>
                                rejectRequest(req._id)
                              }
                              className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                            >
                              Reject
                            </button>
                          </div>
                        </>
                      )}

                      {req.status === "Approved" &&
                        req.certificateUrl && (
                          <a
                            href={req.certificateUrl}
                            target="_blank"
                            className="text-blue-600 text-xs underline block"
                          >
                            View Certificate
                          </a>
                        )}

                      <button
                        onClick={() => deleteRequest(req._id)}
                        className="text-red-600 text-xs underline block"
                      >
                        Delete
                      </button>
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
