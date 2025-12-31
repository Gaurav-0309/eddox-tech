import HeroSection from "@/components/HeroSection";
import LearningMethod from "@/components/LearningMethod";
import JobSupport from "@/components/JobSupport";

import ChatLauncher from "@/components/ChatLauncher";

export default function Home() {
  return (
    <>
      
      <main>
        <HeroSection />
        <LearningMethod />
        <JobSupport />
      </main>
      <ChatLauncher />
      
    </>
  );
}
