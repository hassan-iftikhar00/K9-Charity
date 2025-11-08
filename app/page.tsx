import HeroSection from "@/components/HeroSection";
import ThermometerSection from "@/components/ThermometerSection";
import PhasesSection from "@/components/PhasesSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ThermometerSection />
      <PhasesSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
