import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "La Jolla",
    project: "Kitchen Remodel",
    rating: 5,
    text: "The brothers were incredible to work with. They transformed our outdated kitchen into a modern dream. On time, on budget, and the quality is outstanding.",
  },
  {
    name: "Michael T.",
    location: "Point Loma",
    project: "Master Bath Renovation",
    rating: 5,
    text: "We interviewed 5 contractors and 2 Bros stood out for their honesty and attention to detail. Our master bath is now a spa retreat. Highly recommend!",
  },
  {
    name: "Jennifer & David K.",
    location: "Carlsbad",
    project: "Home Addition",
    rating: 5,
    text: "Added 800 sq ft to our home seamlessly. You can't even tell it's an addition. The crew was professional, clean, and respectful of our family's schedule.",
  },
  {
    name: "Robert L.",
    location: "Del Mar",
    project: "Deck & Outdoor Living",
    rating: 5,
    text: "Our new deck has become the centerpiece of our home. The craftsmanship is exceptional. Friends constantly ask who built it.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-charcoal">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold tracking-wide uppercase mb-3">
            Client Stories
          </p>
          <h2 className="heading-section text-cream mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cream/5 backdrop-blur border border-cream/10 rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-terracotta/30" />

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-cream/90 font-display italic mb-8 leading-relaxed">
                "{current.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-cream font-semibold text-lg">{current.name}</p>
                <p className="text-cream/60 text-sm">
                  {current.location} • {current.project}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-terracotta w-6"
                        : "bg-cream/30 hover:bg-cream/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
