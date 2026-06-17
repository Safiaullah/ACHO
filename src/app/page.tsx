import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ApproachPreview from "@/components/sections/ApproachPreview";
import ValuesSection from "@/components/sections/ValuesSection";
import FounderPreview from "@/components/sections/FounderPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <ApproachPreview />
      <ValuesSection />
      <FounderPreview />
      <Testimonials />
    </main>
  );
}
