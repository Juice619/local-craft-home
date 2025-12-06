import project1 from "@/assets/portfolio/IMG_1207.jpeg";
import kitchen from "@/assets/portfolio/kitchen.jpeg";
import shower from "@/assets/portfolio/shower.jpeg";

const projects = [
  {
    image: project1,
    title: "Pebble Stone Shower",
    location: "La Jolla",
  },
  {
    image: kitchen,
    title: "Modern Kitchen",
    location: "Del Mar",
  },
  {
    image: shower,
    title: "Luxury Shower",
    location: "Point Loma",
  },
];

const PortfolioGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold tracking-wide uppercase mb-3">
            Our Work
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-card card-hover cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-cream font-display text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-cream/70 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
