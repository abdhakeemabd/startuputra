"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Where Innovation Meets Excellence",
    description: "Your trusted partner in innovation, growth, and success. We provide expert consulting services tailored to your unique needs.",
    image: "/banner/slide1.png",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact",
  },
  {
    title: "Empowering Your Business Growth",
    description: "Unlock your full potential with our data-driven strategies and professional guidance. We help you stay ahead of the competition.",
    image: "/banner/slide2.png",
    buttonText: "Explore Services",
    buttonLink: "/pages/services",
  },
  {
    title: "Expertise You Can Count On",
    description: "With years of experience across various industries, our consultants deliver measurable results and sustainable solutions.",
    image: "/banner/slide3.png",
    buttonText: "Learn More About Us",
    buttonLink: "/pages/about",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");

  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative overflow-hidden h-[550px] md:h-[700px] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          
          // Logic for infinite looping animation
          let positionClass = "translate-x-full opacity-0"; // Default: waiting on right
          if (isActive) {
            positionClass = "translate-x-0 opacity-100 z-10";
          } else if (
            (direction === "next" && index === (currentSlide - 1 + slides.length) % slides.length) ||
            (direction === "prev" && index === (currentSlide + 1) % slides.length)
          ) {
            positionClass = direction === "next" ? "-translate-x-full opacity-0 z-0" : "translate-x-full opacity-0 z-0";
          } else if (direction === "prev" && index === (currentSlide - 1 + slides.length) % slides.length) {
            positionClass = "-translate-x-full opacity-0 z-0";
          }

          return (
            <div key={index} className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${positionClass}`}>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-linear" style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: isActive ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-6 text-center">
                <div className={`max-w-4xl transition-all duration-1000 delay-300 transform ${
                  isActive ? "opacity-100 translate-x-0" : direction === "next" ? "opacity-0 translate-x-20" : "opacity-0 -translate-x-20"
                }`}>
                  <h1 className="text-4xl md:text-7xl font-black leading-tight text-white mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href={slide.buttonLink}>
                      <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
                        {slide.buttonText}
                      </button>
                    </Link>
                    <Link href="/pages/services">
                      <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-xl">
                        Our Services
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-sm transition-all text-white pointer-events-auto group"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-sm transition-all text-white pointer-events-auto group"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative h-3 transition-all duration-500 ease-out ${
              index === currentSlide ? "w-12 bg-white" : "w-3 bg-white/30 hover:bg-white/60"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Side Progress Bar (Subtle) */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-40">
        <div 
          className="h-full bg-white transition-all duration-[6000ms] ease-linear"
          style={{ 
            width: isPaused ? '0%' : '100%',
            transition: isPaused ? 'none' : 'width 6000ms linear'
          }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}


