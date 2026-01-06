"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function DownloadCertificatePage() {
  const searchParams = useSearchParams();
  const certificateType = searchParams.get("type"); // ✅ CRITICAL

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    setLoading(true);
    setMessage("");
    setDownloadUrl("");

    const res = await fetch(
      `/api/certificate/my?email=${email}&type=${certificateType}`
    );
    const data = await res.json();

    setLoading(false);

    if (!data.data) {
      setMessage("No certificate request found.");
      return;
    }

    if (data.data.status === "Pending") {
      setMessage("Your request is under review.");
    } else if (data.data.status === "Rejected") {
      setMessage("Your request was rejected. Contact support.");
    } else if (data.data.status === "Approved") {
      setMessage("Certificate approved. Download below.");
      setDownloadUrl(data.data.certificateUrl);
    }
  };

  return (
    <main className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Download Certificate
      </h1>

      <input
        type="email"
        placeholder="Enter registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full px-4 py-3 rounded mb-4"
      />

      <button
        onClick={checkStatus}
        disabled={loading}
        className="bg-blue-600 text-white w-full py-3 rounded"
      >
        {loading ? "Checking..." : "Check Status"}
      </button>

      {message && (
        <p className="mt-4 text-center text-gray-700">
          {message}
        </p>
      )}

      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="mt-4 block text-center bg-green-600 text-white py-3 rounded"
        >
          Download Certificate
        </a>
      )}
    </main>
  );
}
