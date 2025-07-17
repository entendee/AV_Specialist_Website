import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const services = [
    'Samsung Frame TV Mounting',
    'Recessed Box Installation',
    'Home Theater Design',
    'Audio System Installation',
    'Smart Home Integration',
    'Emergency Repairs'
  ];

  const products = [
    'Samsung Frame TVs',
    'Custom Recessed Boxes',
    'Audio Equipment',
    'Home Theater Systems',
    'Smart Controls',
    'Accessories'
  ];

  const company = [
    'About Us',
    'Our Portfolio',
    'Customer Reviews',
    'Careers',
    'Contact',
    'Blog'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">IC</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Interior Customs Inc.</h3>
                <p className="text-sm text-gray-400">Home Theater & Audio Specialists</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Greater Boston's premier Samsung Frame TV installation and home theater specialists. 
              We combine expert installation with competitive sales to deliver the perfect entertainment experience.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(617) 331-4493</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@interiorcustoms.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Boston, MA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2024 Interior Customs Inc. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Licensed & Insured</span>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Samsung Authorized Dealer
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;