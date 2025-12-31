const values = [
  { title: "Integrity", text: "We act with integrity and honesty in accordance with the highest academic, professional, and ethical standards." },
  { title: "Respect", text: "We respect and honour the dignity of each person, embrace civil discourse, and foster a diverse and inclusive community." },
  { title: "Responsibility", text: "We act responsibly, and we are accountable for our decisions, actions, and their consequences." },
  { title: "Discovery", text: "We seek and create new knowledge and understanding, and foster creativity and innovation, for the benefit of our communities, society, and the environment." },
  { title: "Excellence", text: "We strive for excellence in all our endeavours as individuals, an institution, and a leader in higher education." },
  { title: "Community", text: "We grow together." },
];

export default function ContactValues() {
  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-red-100 p-8 rounded-xl shadow text-center"
            >
              <h3 className="font-semibold text-xl mb-3">{v.title}</h3>
              <p className="text-gray-700">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
