"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";

const TABS = [
  { label: "Internship Certificates", type: "internship" },
  {
    label: "Course Completion Certificates",
    type: "course-completion",
  },
];

export default function AdminCertificatesPage() {
  const [activeTab, setActiveTab] = useState("internship");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Fetch requests based on active tab
  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/certificate/apply?type=${activeTab}`
      );
      const data = await res.json();
      setRequests(data?.data || []);
    } catch (err) {
      console.error("Failed to fetch certificate requests", err);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [activeTab]);

  // Upload certificate
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

  // Approve
  const approveRequest = async (id) => {
    if (!uploadedFiles[id]) {
      alert("Please upload certificate first");
      return;
    }

    await fetch("/api/admin/certificate/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        status: "Approved",
        certificateUrl: uploadedFiles[id],
      }),
    });

    fetchRequests();
  };

  // Reject
  const rejectRequest = async (id) => {
    await fetch("/api/admin/certificate/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        status: "Rejected",
        rejectionReason:
          "Your request has been rejected. Please contact support.",
      }),
    });

    fetchRequests();
  };

  // Delete
  const deleteRequest = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this certificate request?"
    );
    if (!confirmDelete) return;

    await fetch("/api/certificate/apply", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setRequests((prev) => prev.filter((r) => r._id !== id));
  };

  return (
    <>
      <AdminNavbar />

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Certificate Requests
        </h1>

        {/* TABS */}
        <div className="flex gap-3 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={`px-4 py-2 rounded text-sm font-medium ${
                activeTab === tab.type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
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
                  <th className="px-4 py-3 text-left">Course</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Applied On</th>
                  <th className="px-4 py-3 text-left">
                    Actions
                  </th>
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
                    <td className="px-4 py-3">{req.course}</td>

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
                      {new Date(
                        req.createdAt
                      ).toLocaleDateString()}
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

                          <div className="flex gap-2">
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
                        onClick={() =>
                          deleteRequest(req._id)
                        }
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
