import ContactHero from "@/components/corporate/CorporateHero";
import ContactInfo from "@/components/corporate/CorporateInfo";
import ContactBenefits from "@/components/corporate/CorporateBenefits";
import ContactValues from "@/components/corporate/CorporateValues";

export const metadata = {
  title: "Corporate IT Training in India | Employee Skill Development – EDDOX Technology",
  description:
    "EDDOX Technology provides corporate IT training programs in India for companies, offering customized employee skill development in Full Stack, SAP, Data Science and more.",
  keywords: [
    "corporate IT training in India",
    "employee training programs India",
    "company software training India",
    "corporate SAP training",
    "corporate full stack training",
  ],
};


export default function CorporateTrainingPage() {
  return (
    <>
    <header>
        
          <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm text-gray-900">
              Home / Other / Corporate Training
            </p>
          </div>
        </div>
      </header>
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactBenefits />
      <ContactValues />
    </main>


    </>
);
}
