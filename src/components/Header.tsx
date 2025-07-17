import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Calendar } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Best Sellers', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Booking', href: '#booking' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">IC</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Interior Customs Inc.</h1>
              <p className="text-xs text-gray-500">Boston's Frame TV Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsCalendlyOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CalendlyWidget 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </header>
  );
};

export default Header;