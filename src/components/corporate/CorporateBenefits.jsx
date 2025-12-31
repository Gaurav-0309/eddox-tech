const benefits = [
  {
    title: "Elevated Job Performance",
    desc:
      "Employee training equips your workforce with the skills and knowledge needed to excel in their roles, leading to improved job performance and increased efficiency.",
    icon: "📊",
  },
  {
    title: "Elevated Productivity",
    desc:
      "A well-trained team is a productive team. With enhanced capabilities, your employees can work more effectively and efficiently, elevating overall productivity.",
    icon: "⚙️",
  },
  {
    title: "Competitive Edge",
    desc:
      "Companies that prioritize employee training gain a significant competitive advantage. A highly skilled and knowledgeable workforce can set your business apart from the rest.",
    icon: "🏆",
  },
  {
    title: "Employee Retention",
    desc:
      "By offering training opportunities, you showcase your commitment to your employees' growth and development. This fosters loyalty and helps retain your valuable team members.",
    icon: "🔄",
  },
  {
    title: "Adaptation to Change",
    desc:
      "In today's rapidly evolving business landscape, training is essential for helping your employees adapt to new technologies, processes, and best practices.",
    icon: "🧩",
   
  },
  {
    title: "Regulatory Compliance",
    desc:
      "In certain industries, adherence to specific regulations or standards is obligatory. Training ensures your organization remains compliant and avoids legal issues.",
    icon: "📄",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-14">
          Benefits for organisations that invest in employee training
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className={`
                rounded-2xl p-8
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
                ${
                  item.highlighted
                    ? "bg-blue-600 text-white shadow-xl"
                    : "bg-white text-gray-800 shadow-lg"
                }
              `}
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{item.icon}</div>

              {/* Title */}
              <h3
                className={`text-lg font-semibold mb-3 ${
                  item.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[15.5px] leading-relaxed ${
                  item.highlighted ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
