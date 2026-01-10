export const metadata = {
  title: "About EDDOX Technology | Best IT Training Institute in India",
  description:
    "Learn about EDDOX Technology, a leading IT training institute in India providing industry‑oriented courses, expert trainers and placement support for students.",
  keywords: [
    "About EDDOX Technology",
    "IT training institute in India",
    "Best computer institute in India",
    "Software training institute India",
    "EDDOX Technology India",
  ],
};


export default function AboutUs() {
  return (
    <>
      
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm text-gray-600">
              Home / About Us
            </p>
          </div>
        </div>

        <div>
      <div className="flex justify-center my-8">
        <div className="bg-green-100 text-green-900 px-6 py-4 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center m-0">
            About Us
          </h1>
        </div>
      </div>
      </div>

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/images/building.jpg"
              alt="Eddox Tecchnology"
              className="rounded-2xl shadow-xl"
            />

            </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm">
              <strong>Eddox Technology</strong> provides the ideal platform to meet the demands of the constantly evolving SAP Market. We focus on providing the highest quality of training with latest teaching methodology. We offer customized training courses to diverse range of industry with <strong>LIVE PROJECTS</strong>. Our faculty is practicing SAP Consultants having 8-15 yrs of experience with in-depth product knowledge and over multiple number of projects implementation experience.
            </p>
          </div>

        </div>
      </section>

      {/* CTA STRIP */}
        <section className="bg-teal-800 py-10 text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
            <div className="text-center w-full">
              <p className="text-base md:text-lg mx-auto inline-block">
                Save your precious time and effort spent finding a solution.
              </p>
              <a href="/contact" className="underline font-semibold">
                Contact us now
              </a>
            </div>
          </div>
        </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

            <h1 className="col-span-4 text-1xl md:text-4xl lg:text-3xl font-bold text-gray-900 mb-6">
              Amazing accounting statistics showing the power of numbers.
            </h1>

          <div>
            <p className="text-4xl font-bold text-green-600"><span className="stat-arrow">▲</span>2000+</p>
            <p className="text-sm text-gray-600 mt-2">
              Qualified Trainers
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-green-600"><span className="stat-arrow">▲</span>1000+</p>
            <p className="text-sm text-gray-600 mt-2">
              Live Classes
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-green-600"><span className="stat-arrow">▲</span>400+</p>
            <p className="text-sm text-gray-600 mt-2">
              Courses
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-green-600"><span className="stat-arrow">▲</span>100%</p>
            <p className="text-sm text-gray-600 mt-2">
              Job Assistance
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Mission
          </h2>

          <p className="text-lg italic mb-16">
            “We transform lives by empowering people via digital skills.”
          </p>

          <h3 className="text-2xl font-semibold underline mb-12">
            Core Values
          </h3>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { key: 'entrepreneurship', label: 'Entrepreneurship', icon: 'fas fa-briefcase' },
              { key: 'teamwork', label: 'Teamwork', icon: 'fas fa-users' },
              { key: 'data-driven', label: 'Data-Driven', icon: 'fas fa-chart-line' },
              { key: 'transparency', label: 'Transparency', icon: 'fas fa-eye' },
            ].map(({ key, label, icon }) => (
              <div
                key={key}
                className="bg-white text-black rounded-xl p-10 shadow-xl flex flex-col items-center"
              >
                <div className="text-5xl mb-4 text-orange-400">
                  <i className={icon} aria-hidden="true" />
                </div>
                <p className="font-semibold">{label}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      
    </>
  );
}
