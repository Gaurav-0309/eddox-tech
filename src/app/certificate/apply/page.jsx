import { Suspense } from "react";
import ApplyClient from "./ApplyClient";

export default function ApplyPage() {
  return (
    <Suspense fallback={<ApplyLoading />}>
      <ApplyClient />
    </Suspense>
  );
}

function ApplyLoading() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <p className="text-gray-600">Loading application form...</p>
    </div>
  );
}
