/*
 * SA WELDING & REPAIR — Home Page
 * Design: Forge & Steel Precision
 * Assembles all 10 sections in order per brand guidelines
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OfferSection from "@/components/OfferSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <OfferSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
