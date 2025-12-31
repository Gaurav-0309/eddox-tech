import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatLauncher from "@/components/ChatLauncher";

export const metadata = {
  title: "Eddox Technology - Empowering Minds, Building Futures",
  description:
    "Eddox Technology provides SAP, Salesforce, ERP training with certifications and 100% job support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="bg-white">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <Navbar />
        </div>

        {/* Page Content */}
        {children}


        <ChatLauncher />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
