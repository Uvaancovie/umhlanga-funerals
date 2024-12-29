import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Available 24/7 for assistance",
      primary: "083 777 3447",
      secondary: "082 491 8001"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      primary: "info@umhlangafunerals.co.za",
      secondary: "support@umhlangafunerals.co.za"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Our office location",
      primary: "27 Meridian Drive, U Ridge",
      secondary: "Umhlanga, Durban"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      description: "24/7 Emergency Support",
      primary: "Mon-Fri: 8:00 - 17:00",
      secondary: "Sat: 9:00 - 13:00"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            We are here to help you 24/7. Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-orange-500 mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {method.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {method.description}
              </p>
              <p className="text-black font-medium">
                {method.primary}
              </p>
              <p className="text-gray-600">
                {method.secondary}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+27 00 000 0000"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* WhatsApp and Emergency Contact */}
          <div className="space-y-8">
            <div className="bg-green-500 p-8 rounded-lg shadow-lg text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">WhatsApp Support</h3>
              </div>
              <p className="mb-6">
                Get instant support through WhatsApp. Our team is available 24/7 to assist you.
              </p>
              <a 
                href="https://wa.me/083 777 3447"
                className="inline-block bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300"
              >
                Chat with Us
              </a>
            </div>

            <div className="bg-red-500 p-8 rounded-lg shadow-lg text-white">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Emergency Contact</h3>
              </div>
              <p className="mb-6">
                For immediate assistance in case of emergencies, please call our 24/7 emergency line.
              </p>
              <a 
                href="tel:+083 777 3447"
                className="inline-block bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;