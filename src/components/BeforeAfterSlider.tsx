import { useState, useRef, useCallback } from "react";
import beforeImage from "@/assets/portfolio/before.png";
import afterImage from "@/assets/portfolio/bathroom-1.jpeg";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold tracking-wide uppercase mb-3">
            See The Difference
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Before & After
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to see the transformation. This bathroom remodel
            showcases our attention to detail and quality craftsmanship.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize shadow-card-hover select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <img
            src={afterImage}
            alt="After renovation"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Before renovation"
              className="absolute top-0 left-0 h-full object-cover"
              style={{ width: `${containerRef.current?.offsetWidth}px`, maxWidth: 'none' }}
              draggable={false}
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-cream cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cream rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-charcoal/30 rounded-full" />
                <div className="w-1 h-6 bg-charcoal/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-charcoal/80 text-cream px-3 py-1 rounded-full text-sm font-medium">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-terracotta text-cream px-3 py-1 rounded-full text-sm font-medium">
            After
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
