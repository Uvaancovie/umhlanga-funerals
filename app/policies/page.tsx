import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';

const Policies = () => {
  const benefits = [
    {
      title: "Removal of Loved Ones",
      description: "We provide removal services within a 40-50 km radius with utmost care and respect."
    },
    {
      title: "Storage & Preservation",
      description: "Safe storage and preservation of your loved one."
    },
    {
      title: "Cremation or Cemetery Fees",
      description: "Coverage for cremation or cemetery fees up to R2000-00."
    },
    {
      title: "Hearse & Mourner's Coach",
      description: "Elegant transportation services for the funeral procession."
    },
    {
      title: "Medical Documentation",
      description: "Assistance with acquiring necessary medical documentation."
    },
    {
      title: "Decor and Flowers",
      description: "Optional flowers, casket sprays, and decor arrangements."
    }
  ];

  const plans = [
    {
      name: "Standard Plan",
      ageGroup: "Under 65",
      premium: "R81.00",
      coverage: "Basic funeral benefits"
    },
    {
      name: "Family Plan",
      ageGroup: "Under 65",
      premium: "R100.00",
      coverage: "Covers main member, spouse, and children under 21."
    },
    {
      name: "Regal Plan",
      ageGroup: "66-75",
      premium: "R255.00",
      coverage: "Comprehensive funeral benefits"
    }
  ];

  return (
    <><Header></Header><div className="min-h-screen bg-gray-50">
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24">
              <div className="max-w-4xl mx-auto px-6 text-center">
                  <h1 className="text-5xl font-bold mb-6">Dignified Funeral Policies</h1>
                  <p className="text-xl mb-8 text-gray-100">
                      Providing peace of mind and support during life most difficult moments
                  </p>
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                      Get Started Today
                  </button>
              </div>
          </div>

          <section className="py-16 px-6 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                          <h3 className="text-xl font-semibold mb-3 text-orange-600">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                      </div>
                  ))}
              </div>
          </section>

          <section className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {plans.map((plan, index) => (
                          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                              <div className="bg-orange-500 text-white p-6">
                                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                  <p className="text-3xl font-bold">{plan.premium}<span className="text-sm">/month</span></p>
                              </div>
                              <div className="p-6">
                                  <ul className="space-y-4">
                                      <li className="flex items-center text-gray-700">
                                          <ArrowRight className="w-5 h-5 mr-2 text-orange-500" />
                                          Age Group: {plan.ageGroup}
                                      </li>
                                      <li className="flex items-center text-gray-700">
                                          <ArrowRight className="w-5 h-5 mr-2 text-orange-500" />
                                          {plan.coverage}
                                      </li>
                                  </ul>
                                  <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                      Select Plan
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
              <div className="max-w-4xl mx-auto px-6 text-center">
                  <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="flex flex-col items-center">
                          <Phone className="w-8 h-8 mb-4" />
                          <p className="font-semibold">Kumar: 083 777 3447</p>
                          <p>Office: 031 502 3931</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <Mail className="w-8 h-8 mb-4" />
                          <p>info@umhlangafunerals.co.za</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <MapPin className="w-8 h-8 mb-4" />
                          <p>Umhlanga, KwaZulu-Natal</p>
                      </div>
                  </div>
              </div>
          </section>
      </div></>
  );
};

export default Policies;