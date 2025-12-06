import { Shield, Award, CheckCircle, Star } from "lucide-react";

const TrustBar = () => {
  const badges = [
    { icon: Shield, label: "Licensed & Insured" },
    { icon: Award, label: "BBB Accredited" },
    { icon: CheckCircle, label: "Professional" },
    { icon: Star, label: "5-Star Rated" },
  ];

  return (
    <section className="bg-card py-6 border-y border-border">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 grayscale-hover cursor-default"
            >
              <badge.icon className="w-8 h-8 text-warm-gray" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
