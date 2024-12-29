"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "vehicle",
      title: "Bentley Fleet",
      description: "Experience luxury and elegance for dignified occasions.",
      image: "/bentley.png", // Place in public folder
      cta: "View Fleet",
      link: "#fleet-gallery", // ID of the FleetGallery section
    },
    {
      type: "vehicle",
      title: "Mercedes G Wagon",
      description: "Unmatched style and prestige for your loved ones.",
      image: "/g-wagon.png", // Place in public folder
      cta: "View Fleet",
      link: "#fleet-gallery", // ID of the FleetGallery section
    },
    {
      type: "vehicle",
      title: "Rolls Royce Fleet",
      description: "A timeless icon for a dignified send-off.",
      image: "/rolls-royce.png", // Place in public folder
      cta: "View Fleet",
      link: "#fleet-gallery", // ID of the FleetGallery section
    },
    {
      type: "vehicle",
      title: "Jaguar XF",
      description: "Sophistication and class for every occasion.",
      image: "/jaguar.png", // Place in public folder
      cta: "View Fleet",
      link: "#fleet-gallery", // ID of the FleetGallery section
    },
    {
      type: "policy",
      title: "Family Funeral Policies",
      description: "Comprehensive coverage to protect your family’s future.",
      image: "/policy.png", // Place in public folder
      cta: "Learn More",
      link: "#policies", // ID of the Policies section
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] bg-black">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Image with overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={slide.link} // Links to the FleetGallery section
                    className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    {slide.cta}
                  </a>
                  <a
                    href="tel:083 777 3447"
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-lg">Call Now: 083 777 3447</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-orange-500" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
