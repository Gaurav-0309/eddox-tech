"use client";

import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold text-center mb-14">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ================= INTERNSHIP CERTIFICATE ================= */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
          <div className="relative h-56 w-full mb-6">
            <Image
              src="/certificates/internship-certificate.jpeg"
              alt="Internship Certificate"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Internship Certificate
          </h2>

          <p className="text-gray-600 mb-8">
            Awarded after successful internship completion.
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/certificate/apply?type=internship"
              className="w-full text-center bg-green-200 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Apply for Internship Certificate
            </Link>

            <Link
              href="/certificate/download?type=internship"
              className="w-full text-center bg-green-200 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Download Certificate
            </Link>
          </div>
        </div>

        {/* ================= COURSE COMPLETION CERTIFICATE ================= */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
          <div className="relative h-56 w-full mb-6">
            <Image
              src="/certificates/course-completion.jpeg"
              alt="Course Completion Certificate"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Course Completion Certificate
          </h2>

          <p className="text-gray-600 mb-8">
            Issued after successful course completion.
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/certificate/apply?type=course-completion"
              className="w-full text-center bg-green-200 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Apply for Course Completion Certificate
            </Link>

            <Link
              href="/certificate/download?type=course-completion"
              className="w-full text-center bg-green-200 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Download Certificate
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
