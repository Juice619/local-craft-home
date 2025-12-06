import { CheckCircle } from "lucide-react";
import framingImage from "@/assets/portfolio/framing.jpeg";

const AboutSection = () => {
  const highlights = [
    "Family-owned and operated since 2015",
    "Licensed General Contractor #1117495",
    "Fully insured",
    "500+ successful projects completed",
    "Local San Diego craftsmen",
    "Transparent pricing, no hidden fees",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={framingImage}
                alt="2 Bros Construction team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-terracotta text-cream p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-display font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-terracotta font-semibold tracking-wide uppercase mb-3">
              Our Story
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Two Brothers, One Vision
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                What started as two brothers helping neighbors with home repairs
                has grown into one of San Diego's most trusted residential
                construction companies. We still bring that same neighborly
                approach to every project.
              </p>
              <p>
                We believe in doing things right the first time—quality
                materials, skilled craftsmanship, and honest communication. When
                you work with 2 Bros, you're working with family.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
