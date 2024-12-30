"use client";
import React, { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-black text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a
              href="tel:+27000000000"
              className="flex items-center hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Call us at +27 00 000 0000"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>083 777 3447</span>
            </a>
            <a
              href="mailto:info@umhlangafunerals.co.za"
              className="flex items-center hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Email us at info@example.com"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span>info@umhlangafunerals.co.za</span>
            </a>
            <a
              href="https://wa.me/083 77`7 3447"
              className="flex items-center hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>WhatsApp</span>
            </a>
          </div>
          <span className="hidden sm:inline">Providing Dignified Funeral Services Since 1960</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            <a
              href="#hero"
              className="hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 flex items-center"
            >
              <img
                src="/LOGO.png"
                alt="Umhlanga Funerals Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-black ml-2">
                Umhlanga Funerals
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/Home"
              className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Home
            </a>
            <a
              href="#why-choose-us"
              className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Why Choose Us
            </a>
            <a
              href="#news-and-blogs"
              className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              News & Blogs
            </a>
            <a
              href="#contact-us"
              className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Contact Us
            </a>

            <a
              href="/policies"
              className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Policies
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#hero"
                className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Home
              </a>
              <a
                href="#why-choose-us"
                className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Why Choose Us
              </a>
              <a
                href="#news-and-blogs"
                className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                News & Blogs
              </a>
              <a
                href="#contact-us"
                className="text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
