"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Info, X, Phone } from "lucide-react";

const FleetGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const vehicles = [
    {
      id: 1,
      name: "Rolls-Royce Fleet",
      type: "Premium Hearse",
      description:
        "Our flagship vehicle, offering unmatched elegance and dignity for funeral services.",
      specs: "V12 Engine | Extended Wheelbase | Custom Interior",
      image: "/rolls-royce.png",
      price: "Premium Service",
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      type: "Family Cars",
      description:
        "Luxurious comfort for family members, with spacious interior and premium amenities.",
      specs: "| Premium Comfort",
      image: "/c-clas.png",
      price: "Executive Service",
    },
    {
      id: 3,
      name: "Bentley Flying Spur",
      type: "Premium",
      description:
        "The epitome of British luxury, providing supreme comfort and sophistication.",
      specs: "W12 Engine | Advanced Technology | Handcrafted Interior",
      image: "/bentley.png",
      price: "Luxury Service",
    },
    {
      id: 4,
      name: "Mercedes-Benz G-Class",
      type: "Support Vehicle",
      description:
        "Powerful and prestigious support vehicle for all funeral arrangements.",
      specs: "V8 BiTurbo | All-Wheel Drive | Premium Audio",
      image: "/g-wagon.png",
      price: "Premium Support",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const calculatePosition = (index: number) => {
    const diff = index - activeIndex;
    const translateZ = diff === 0 ? 0 : -400;
    const translateX = diff * 60;
    const opacity = diff === 0 ? 1 : 0.6;
    const zIndex = diff === 0 ? 10 : 1;
    const scale = diff === 0 ? 1 : 0.8;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Premium Fleet</h2>
          <p className="text-xl text-gray-300">
            Experience unmatched dignity with our luxury vehicle collection
          </p>
        </div>

        {/* 3D Gallery */}
        <div className="relative h-[600px] perspective-1000">
          <div className="relative w-full h-full">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="absolute w-full h-full transition-all duration-500 cursor-pointer"
                style={calculatePosition(index)}
                onClick={() => index === activeIndex && setShowDetails(true)}
              >
                {/* Vehicle Card */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-full transform-style-preserve-3d">
                  {/* Image */}
                  <div className="relative h-2/3">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4">{vehicle.type}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 font-semibold">
                        {vehicle.price}
                      </span>
                      <button
                        className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDetails(true);
                        }}
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Details Modal */}
        {showDetails && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">
                  {vehicles[activeIndex].name}
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <img
                src={vehicles[activeIndex].image}
                alt={vehicles[activeIndex].name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">{vehicles[activeIndex].description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Specifications</h4>
                <p className="text-gray-600">{vehicles[activeIndex].specs}</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-lg text-center hover:bg-orange-600 transition-colors"
                >
                  Book Now
                </a>
                <a
                  href="tel:083 777 3447"
                  className="flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FleetGallery;
