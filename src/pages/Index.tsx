import HeroSection from "@/components/HeroSection";
import BiologySection from "@/components/BiologySection";
import SkinStorySection from "@/components/SkinStorySection";
import EcosystemSection from "@/components/EcosystemSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BiologySection />
      <SkinStorySection />
      <EcosystemSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
