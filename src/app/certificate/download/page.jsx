"use client";

import { useState } from "react";

export default function DownloadCertificatePage() {
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setDownloadUrl("");

    const email = e.target.email.value;

    const res = await fetch("/api/certificate/apply");
    const data = await res.json();

    const request = data.data.find((r) => r.email === email);

    if (!request) {
      setMessage("No certificate request found for this email.");
      return;
    }

    if (request.status === "Pending") {
      setMessage("Your certificate request is currently under review.");
      return;
    }

    if (request.status === "Rejected") {
      setMessage(
        "Your certificate request has been rejected due to various reasons. Please contact us at support@eddoxtechnology.com."
      );
      return;
    }

    if (request.status === "Approved" && request.certificateUrl) {
      setDownloadUrl(request.certificateUrl);
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Download Certificate</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Enter registered email"
            className="w-full border px-4 py-2 rounded"
            required
          />

          <button className="w-full bg-blue-700 text-white py-2 rounded">
            Check Status
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-red-600">{message}</p>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="block mt-4 text-center text-green-700 underline font-medium"
          >
            Download Your Certificate
          </a>
        )}
      </div>
    </section>
  );
}
