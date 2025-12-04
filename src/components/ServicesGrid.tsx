import { useState } from "react";
import { Bath, ChefHat, Home, Hammer, PaintBucket, TreePine, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Home,
    title: "Home Additions",
    description:
      "Expand your living space with seamless room additions that match your home's character.",
    tips: [
      "Check local zoning laws and HOA restrictions before planning",
      "Get multiple quotes and verify contractor licenses",
      "Plan for 10-20% contingency in your budget",
      "Consider how the addition affects home resale value",
      "Ensure the design matches your existing home's style",
    ],
    guide: "Home additions can increase your living space by 20-50%. Most projects take 3-6 months to complete. Start by determining your needs: extra bedroom, home office, or expanded living area. Always obtain proper permits to avoid costly issues during resale.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into the heart of your home with custom cabinetry and modern layouts.",
    tips: [
      "Plan your layout around the 'work triangle' (sink, stove, fridge)",
      "Invest in quality cabinetry—it's the biggest visual impact",
      "Don't skimp on lighting—layer ambient, task, and accent lights",
      "Choose durable countertops that fit your lifestyle",
      "Consider adding an island for extra prep space and storage",
    ],
    guide: "Kitchen remodels offer the highest ROI of any home improvement, averaging 70-80% return. Budget tip: keep plumbing in existing locations to save thousands. A minor remodel can cost $15-30K while a major renovation runs $50-100K+.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovation",
    description:
      "Create a spa-like retreat with premium fixtures, tile work, and thoughtful design.",
    tips: [
      "Prioritize ventilation to prevent mold and moisture damage",
      "Waterproofing is crucial—don't cut corners here",
      "Consider a curbless shower for modern look and accessibility",
      "Heated floors are an affordable luxury worth considering",
      "Choose timeless finishes over trendy ones for better resale",
    ],
    guide: "Bathroom renovations typically take 2-4 weeks and average $10-25K for a standard remodel. Water-efficient fixtures can save 20% on water bills. Pro tip: a well-designed half-bath adds more value per square foot than almost any other improvement.",
  },
  {
    icon: Hammer,
    title: "Custom Framing",
    description:
      "Expert structural work and framing for additions, ADUs, and new construction projects.",
    tips: [
      "Hire an engineer for structural changes to load-bearing walls",
      "Use moisture-resistant materials in wet climates",
      "Ensure proper insulation is planned during framing",
      "Rough-in electrical and plumbing before closing walls",
      "Schedule inspections at each required phase",
    ],
    guide: "Framing is the skeleton of your project—quality here affects everything. Standard framing costs $7-16 per square foot. ADUs (Accessory Dwelling Units) are increasingly popular and can add $100K+ to property value while generating rental income.",
  },
  {
    icon: TreePine,
    title: "Outdoor Living",
    description:
      "Decks, patios, and pergolas that extend your living space into the San Diego sunshine.",
    tips: [
      "Choose materials based on maintenance commitment (wood vs composite)",
      "Consider sun exposure when planning covered vs open areas",
      "Include electrical outlets for outdoor appliances and lighting",
      "Plan drainage to prevent water pooling near foundation",
      "Check setback requirements before building near property lines",
    ],
    guide: "Outdoor living spaces can return 65-90% of investment. San Diego's climate makes these spaces usable year-round. Composite decking costs more upfront but requires minimal maintenance. Consider built-in features like planters, benches, or fire pits.",
  },
  {
    icon: PaintBucket,
    title: "Full Renovations",
    description:
      "Complete home transformations from concept to completion with dedicated project management.",
    tips: [
      "Create a detailed scope of work before getting quotes",
      "Establish a realistic timeline with buffer for delays",
      "Live elsewhere during major renovations if possible",
      "Make all design decisions before demolition begins",
      "Keep a decisions log to avoid miscommunication",
    ],
    guide: "Full renovations require careful planning and clear communication. Budget 15-25% above estimates for unexpected issues. Prioritize structural and mechanical systems over cosmetic upgrades. A good contractor will provide a detailed project schedule and regular updates.",
  },
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta/10 transition-colors">
                  <service.icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-terracotta font-medium hover:gap-2 transition-all group-hover:underline">
                  Learn More
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mb-2">
                  <selectedService.icon className="w-6 h-6 text-terracotta" />
                </div>
                <DialogTitle className="text-2xl font-display">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tips for First-Time Homeowners</h4>
                  <ul className="space-y-2">
                    {selectedService.tips.map((tip, index) => (
                      <li key={index} className="flex gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Quick Guide</h4>
                  <p className="text-muted-foreground text-sm">{selectedService.guide}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesGrid;
