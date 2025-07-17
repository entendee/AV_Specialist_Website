import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">1,000+ Happy Customers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Samsung Frame TV
                <span className="block text-blue-600">Mounting Experts</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional installation of Samsung Frame TVs with custom recessed boxes. 
                We sell the TVs and provide expert mounting services for the perfect art-like display.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                <span>Shop Frame TVs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => setIsCalendlyOpen(true)}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Installation</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Samsung Frame TV mounted like artwork"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Authorized Dealer
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
      
      <CalendlyWidget 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </section>
  );
};

export default Hero;