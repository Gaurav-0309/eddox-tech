import { CheckCircle } from "lucide-react";

const points = [
  "Flexible Dates",
  "1-on-1 Training",
  "Class Recordings",
  "Certification Desk",
  "Revision Classes",
  "4-Hour Sessions",
  "Lab Extensions",
  "Serving All Time Zones",
];

export default function ContactInfo() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 bg-gray-10">
      
      <img
  src="/images/corporate.jpg"
  alt="Corporate Training"
  className="rounded-xl shadow-lg w-full max-h-[380px] object-cover"
/>


      <div>
        <p className="text-gray-700 mb-6">
          Companies around the world invest in employee training for their business.
        </p>

        <ul className="space-y-3">
          {points.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>


    </section>

    {/* FULL WIDTH TEXT */}
<section className="max-w-7xl mx-auto px-6 pb-16 bg-gray-10">
  <p className="text-gray-700 leading-loose text-[17px]">
    Corporate training is the process of training employees through a system of activities that educate employees by using various forms of learning programs. It acts as a catalyst to success for employees, which, in turn, means the success of your business/organization as a whole. And Employing training and development is essential for companies to strengthen their employee performance. It improves employees’ job skills and knowledge, which helps them improve performance in the workplaces.
  </p>

  <p className="mt-6 text-gray-700 leading-loose text-[17px]">
   And the corporate world now not only needs skilled workers but also up-skilled ones. With the dynamism of the marketplace, every field needs people who are constantly learning, changing, evolving with the rest of the field. You need your workers to be up to date and we can do just that for you. Eddox-Technology offers intensive, hands-on training for individuals or groups in the fields of IT, Sales, Operations, Marketing, Management, and Consulting. Take a look at what we offer and we’re sure you’ll see that Eddox-Technology is a good fit for you.
  </p>

  <p className="mt-6 text-gray-700 leading-loose text-[17px]">At Eddox-Technology, we provide you with all the amenities that help you sustain and progress in the rapidly transforming era of tools and technology. Our highly skilled in-house corporate trainers, with years of experience in diverse domains, impart the right amount of knowledge that can keep you afloat in the competitive corporate</p>
</section>
</>
  );
}
