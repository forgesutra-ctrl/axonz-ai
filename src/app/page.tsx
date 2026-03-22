import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { WhyAxonz } from "@/components/sections/WhyAxonz";
import { Industries } from "@/components/sections/Industries";
import { HowVoiceWorks } from "@/components/sections/HowVoiceWorks";
import { TechStack } from "@/components/sections/TechStack";
import { Pricing } from "@/components/sections/Pricing";
import { CompareTable } from "@/components/sections/CompareTable";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <WhyAxonz />
        <Industries />
        <HowVoiceWorks />
        <TechStack />
        <Pricing />
        <CompareTable />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
