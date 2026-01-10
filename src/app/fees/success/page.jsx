"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  const downloadReceipt = () => {
    if (!paymentId) return;
    window.open(`/api/receipt?paymentId=${paymentId}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <h1 className="text-4xl font-bold text-green-700">
        ✅ Payment Successful
      </h1>

      <p className="mt-4 text-lg text-center">
        Receipt has been sent to your email.
      </p>

      {paymentId && (
        <p className="mt-2 text-sm text-gray-600">
          Payment ID: {paymentId}
        </p>
      )}

      <button
        onClick={downloadReceipt}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        ⬇ Download Receipt
      </button>

      <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </a>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
