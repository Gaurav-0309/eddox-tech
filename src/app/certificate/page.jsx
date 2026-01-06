"use client";

import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* ================= INTERNSHIP CERTIFICATE ================= */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 p-8 flex flex-col">
          {/* Image */}
          <div className="relative h-60 w-full mb-8">
            <Image
              src="/certificates/internship-certificate.jpeg"
              alt="Internship Certificate"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Title + Badge */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">
              Internship Certificate
            </h2>

            {/* STATUS BADGE (static for now) */}
            <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Available
            </span>
          </div>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Awarded after successful completion of the internship
            program with Eddox Technology.
          </p>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/certificate/apply?type=internship"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              📄 Apply for Certificate
            </Link>

            <Link
              href="/certificate/download?type=internship"
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              ⬇️ Download Certificate
            </Link>
          </div>
        </div>

        {/* ================= COURSE COMPLETION CERTIFICATE ================= */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 p-8 flex flex-col">
          {/* Image */}
          <div className="relative h-60 w-full mb-8">
            <Image
              src="/certificates/course-completion.jpeg"
              alt="Course Completion Certificate"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Title + Badge */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">
              Course Completion Certificate
            </h2>

            {/* STATUS BADGE */}
            <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Available
            </span>
          </div>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Issued after successful completion of the enrolled
            course and fulfillment of all evaluation criteria.
          </p>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/certificate/apply?type=course-completion"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition"
            >
              📄 Apply for Certificate
            </Link>

            <Link
              href="/certificate/download?type=course-completion"
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              ⬇️ Download Certificate
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
