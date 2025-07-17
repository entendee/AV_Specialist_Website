import React from 'react';
import { Monitor, Settings, Headphones, Zap, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Samsung Frame TV Mounting',
      description: 'Professional installation with custom recessed boxes for a perfect flush-wall appearance.',
      features: ['Recessed box installation', 'Cable concealment', 'Perfect alignment', '2-year warranty'],
      price: 'Starting at $199'
    },
    {
      icon: Settings,
      title: 'Home Theater Setup',
      description: 'Complete home theater design and installation for the ultimate viewing experience.',
      features: ['Speaker placement', 'Audio calibration', 'Lighting design', 'Component integration'],
      price: 'Starting at $899'
    },
    {
      icon: Headphones,
      title: 'Audio System Installation',
      description: 'High-end audio systems for every room, from surround sound to whole-home audio.',
      features: ['Multi-room audio', 'Wireless integration', 'Smart home compatibility', 'Professional tuning'],
      price: 'Starting at $599'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Emergency and same-day installation services available'
    },
    {
      icon: Zap,
      title: 'Smart Home Ready',
      description: 'All installations are compatible with modern smart home systems'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional installation and setup services for all your home theater and audio needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Book This Service
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;