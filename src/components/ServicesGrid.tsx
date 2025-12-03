import { Bath, ChefHat, Home, Hammer, PaintBucket, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Home Additions",
    description:
      "Expand your living space with seamless room additions that match your home's character.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into the heart of your home with custom cabinetry and modern layouts.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovation",
    description:
      "Create a spa-like retreat with premium fixtures, tile work, and thoughtful design.",
  },
  {
    icon: Hammer,
    title: "Custom Framing",
    description:
      "Expert structural work and framing for additions, ADUs, and new construction projects.",
  },
  {
    icon: TreePine,
    title: "Outdoor Living",
    description:
      "Decks, patios, and pergolas that extend your living space into the San Diego sunshine.",
  },
  {
    icon: PaintBucket,
    title: "Full Renovations",
    description:
      "Complete home transformations from concept to completion with dedicated project management.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold tracking-wide uppercase mb-3">
            What We Do
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Residential Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From small updates to complete home transformations, we bring the same
            attention to detail and craftsmanship to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card border-border shadow-card card-hover cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta/10 transition-colors">
                  <service.icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-terracotta font-medium hover:gap-2 transition-all group-hover:underline"
                >
                  Learn More
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
