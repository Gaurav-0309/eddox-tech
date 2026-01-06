import { Suspense } from "react";
import DownloadClient from "./DownloadClient";

export default function DownloadPage() {
  return (
    <Suspense fallback={<DownloadLoading />}>
      <DownloadClient />
    </Suspense>
  );
}

function DownloadLoading() {
  return (
    <div className="max-w-md mx-auto px-6 py-16 text-center">
      <p className="text-gray-600">Loading download page...</p>
    </div>
  );
}
