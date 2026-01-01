'use client';

import { useState } from 'react';
import { Phone, ShoppingBasket, Menu, X } from "lucide-react";

export default function Headers(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <ShoppingBasket className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Chahat Grocers
                </h1>
              </div>
            </div>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Home
              </a>
              <a href="#categories" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Categories
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Why Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
  
            {/* Desktop Call Button & Mobile Menu Button */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Call Button - Hidden on mobile, shown on tablet+ */}
              <a
                href="tel:+1234567890"
                className="hidden sm:flex items-center space-x-2 bg-linear-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40 overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors font-medium"
            >
              Categories
            </a>
            <a
              href="#why-us"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors font-medium"
            >
              Why Us
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors font-medium"
            >
              Contact
            </a>
            {/* Mobile Call Button */}
            <a
              href="tel:+1234567890"
              onClick={closeMenu}
              className="flex items-center justify-center space-x-2 bg-linear-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium mt-4"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            </nav>
          </div>
        )}
      </header>
    )
}