import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PortfolioGallery from "@/components/PortfolioGallery";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="pb-20 lg:pb-0">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <BeforeAfterSlider />
      <PortfolioGallery />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
