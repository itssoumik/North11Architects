"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  desktopSrc: string;
  mobileSrc: string;
  title: string;
  subtitle: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    desktopSrc: "/Landscape Image/1.png",
    mobileSrc: "/Potrait Image/1.png",
    title: "MIXED USE PROJECT",
    subtitle: "Tulip twelve, Commercial+Residential",
  },
  {
    id: 2,
    desktopSrc: "/Landscape Image/2.png",
    mobileSrc: "/Potrait Image/2.png",
    title: "INTERIOR DESIGN",
    subtitle: "Clubhouse Entrance Lobby",
  },
  {
    id: 3,
    desktopSrc: "/Landscape Image/3.png",
    mobileSrc: "/Potrait Image/3.png",
    title: "RESIDENTIAL PROJECT",
    subtitle: "Domjur, Howrah",
  },
  {
    id: 4,
    desktopSrc: "/Landscape Image/4.png",
    mobileSrc: "/Potrait Image/4.png",
    title: "COMMERCIAL PROJECT",
    subtitle: "Howrah, Near Maidan Metro",
  },
  {
    id: 5,
    desktopSrc: "/Landscape Image/5.png",
    mobileSrc: "/Potrait Image/5.png",
    title: "G+10 HOSTEL BLOCK",
    subtitle: "IIEST Shibpur (BE College)",
  },
];

const AUTO_SLIDE_INTERVAL = 3000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="hero-carousel-height relative w-full md:min-h-[640px] overflow-hidden bg-[#0c0d0e]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Architectural Showcase Carousel"
    >
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              aria-hidden={!isActive}
            >
              {/* Desktop Landscape Image (>= 768px) */}
              <div className="hidden md:block relative w-full h-full">
                <Image
                  src={slide.desktopSrc}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                    }`}
                  sizes="100vw"
                />
              </div>

              {/* Mobile Portrait Image (< 768px) */}
              <div className="block md:hidden relative w-full h-full">
                <Image
                  src={slide.mobileSrc}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                    }`}
                  sizes="100vw"
                />
              </div>

              {/* Vignette Overlay for architectural depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/90 via-black/30 to-black/50 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Project Caption */}
      <div
        className="absolute z-20 pointer-events-none transition-all duration-700"
        style={{
          bottom: "max(clamp(1.5rem, 5vw, 4.5rem), calc(env(safe-area-inset-bottom, 0px) + 1.25rem))",
          left: "max(clamp(1.5rem, 6vw, 6rem), calc(env(safe-area-inset-left, 0px) + 1.25rem))",
          right: "max(clamp(1.5rem, 6vw, 6rem), calc(env(safe-area-inset-right, 0px) + 1.25rem))",
        }}
      >
        <div key={currentIndex} className="animate-[fadeIn_0.6s_ease-out]">
          <h2
            style={{
              fontFamily: "'Libre Baskerville', Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3.5vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0,0,0,0.9)",
              margin: 0,
            }}
          >
            {slides[currentIndex].title}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', -apple-system, 'Segoe UI', Helvetica, sans-serif",
              fontSize: "clamp(14px, 1.5vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.75,
              letterSpacing: 0,
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 2px 8px rgba(0,0,0,0.85)",
              marginTop: "6px",
            }}
          >
            {slides[currentIndex].subtitle}
          </p>
        </div>
      </div>



      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/40 hover:bg-[#c5a880] text-white hover:text-[#0c0d0e] border border-white/20 hover:border-[#c5a880] backdrop-blur-md transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/40 hover:bg-[#c5a880] text-white hover:text-[#0c0d0e] border border-white/20 hover:border-[#c5a880] backdrop-blur-md transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Minimalist Progress Indicators at bottom center (no scroll indicator)
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className="h-1 w-10 sm:w-14 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                key={`${index}-${isActive ? "active" : "idle"}`}
                className={`h-full bg-[#c5a880] transition-all ${isActive ? "w-full animate-[progress_3s_linear]" : "w-0"
                  }`}
              />
            </button>
          );
        })}
      </div> */}
    </section>
  );
}
