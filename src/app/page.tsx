import InputDesign from "@/components/AnimatedDesign";
import LogoCarousel from "@/components/Banner";
import Page from "@/components/BuisnessSection";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/Navbar";
import FeaturesGrid from "@/components/PowerFullFeatures";
import CallToActionSection from "@/components/ReadyToTransform";
import SteveAISection from "@/components/SmarterSupport";
import TestimonialsSection from "@/components/Testimonial";
import ChallengesSection from "@/components/WhyChooseUs";
import WhyPumaProSection from "@/components/WhyPumaPro";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <LogoCarousel />
      <Features></Features>
      <ChallengesSection />
      <FeaturesGrid />
      <SteveAISection />
      <WhyPumaProSection />
      <Page />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
