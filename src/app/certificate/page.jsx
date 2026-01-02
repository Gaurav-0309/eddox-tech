import Image from "next/image";
import Link from "next/link";

function CertificateSection({ heading, badge }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20 transition hover:shadow-xl">
      
      {/* BADGE */}
      <div className="text-center mb-3">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full">
          {badge}
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: CERTIFICATE PREVIEW */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-md bg-gray-50 p-4">
            <Image
              src="/images/certificate-sample.png"
              alt="Certificate Preview"
              width={420}
              height={600}
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <p className="text-gray-600 text-center md:text-left max-w-md leading-relaxed">
            Apply for your certificate, download an already issued certificate,
            or verify the authenticity of a certificate issued by
            Eddox Technology.
          </p>

          <div className="w-full max-w-sm space-y-5">
            <Link
              href="/certificate/apply"
              className="block text-center w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-lg font-medium transition"
            >
              Apply for Certificate
            </Link>

            <Link
              href="/certificate/download"
              className="block text-center w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-lg font-medium transition"
            >
              Download Certificate
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* CERTIFICATE SECTION 1 */}
        <CertificateSection
          heading="Course Completion Certificate"
          badge="Academic Certificate"
        />

        {/* CERTIFICATE SECTION 2 */}
        <CertificateSection
          heading="SAP Professional Certificate"
          badge="Professional Certificate"
        />

      </div>
    </section>
  );
}
