import ContactHero from "@/components/corporate/CorporateHero";
import ContactInfo from "@/components/corporate/CorporateInfo";
import ContactBenefits from "@/components/corporate/CorporateBenefits";
import ContactValues from "@/components/corporate/CorporateValues";

export const metadata = {
  title: "Corporate-Training | Eddox-Technology",
  description: "Get in touch with Eddox-Technology for corporate training and professional courses.",
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
