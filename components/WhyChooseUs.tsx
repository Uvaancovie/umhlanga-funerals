import React from 'react';
import { Heart, Car, Shield, History, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Compassionate Care",
      description: "We provide personalized and compassionate service to support you through difficult times.",
      image: "/compassion-care.png",
      alt: "Caring funeral staff providing support"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Premium Fleet",
      description: "A wide range of luxury vehicles, including Bentley, G Wagon, and Rolls Royce.",
      image: "/luxury-fleet.png",
      alt: "Luxury funeral vehicle fleet"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Comprehensive Policies",
      description: "Affordable and comprehensive funeral policies starting at R299/month.",
      image: "/funeral-policies.png",
      alt: "Funeral policy documentation"
    },
    {
      icon: <History className="w-12 h-12" />,
      title: "60+ Years of Excellence",
      description: "Trusted by families for over six decades.",
      image: "/history.png",
      alt: "Historical image of Umhlanga Funerals"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Support",
      image: "/247.png",
      description: "Round-the-clock assistance to ensure seamless arrangements.",
     
      alt: "24/7 customer support team"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Why Choose Umhlanga Funerals?
          </h2>
          <p className="text-xl text-gray-600">
            Delivering dignity, compassion, and excellence since 1960.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;