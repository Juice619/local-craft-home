import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/portfolio/deck.jpeg";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-main pt-24 pb-32">
          <div className="max-w-3xl">
            <p className="text-cream font-semibold tracking-wide uppercase mb-4 animate-fade-up drop-shadow-md">
              San Diego's Trusted Builders Since 2015
            </p>
            <h1 className="heading-display text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Crafting Homes,
              <br />
              Building Dreams
            </h1>
            <p
              className="text-cream/80 text-lg md:text-xl max-w-xl mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Family-owned residential construction and remodeling. From custom
              kitchens to complete home additions, we bring craftsmanship and
              integrity to every project.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="accent" size="xl" onClick={() => setIsContactOpen(true)}>
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline-light" size="xl" onClick={scrollToPortfolio}>
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cream/70 rounded-full" />
          </div>
        </div>
      </section>

      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default HeroSection;
