export default function ContactHero() {
  return (
    <section
      className="relative h-[420px] flex items-center"
      style={{
        backgroundImage: "url('/images/corporate training.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <span className="bg-orange-500 px-4 py-1 rounded text-sm">
          Corporate Training
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Driving Excellence through Expert Training
        </h1>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white">
          Contact Now
        </button>
      </div>
    </section>
  );
}
