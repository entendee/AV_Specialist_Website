import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frame-tv', name: 'Frame TV Installs' },
    { id: 'home-theater', name: 'Home Theaters' },
    { id: 'audio', name: 'Audio Systems' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Samsung 75" Frame TV with Recessed Box',
      category: 'frame-tv',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom recessed installation in modern living room',
      client: 'Back Bay Residence',
      features: ['Recessed mounting', 'Cable concealment', 'Art mode setup']
    },
    {
      id: 2,
      title: 'Luxury Home Theater Installation',
      category: 'home-theater',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '7.2 surround sound with 85" display',
      client: 'Newton Estate',
      features: ['Dolby Atmos', 'Custom seating', 'Acoustic treatment']
    },
    {
      id: 3,
      title: 'Multi-Room Audio System',
      category: 'audio',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Whole-home audio with smart controls',
      client: 'Cambridge Home',
      features: ['8 zones', 'Smart integration', 'Outdoor speakers']
    },
    {
      id: 4,
      title: 'Frame TV Gallery Wall',
      category: 'frame-tv',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multiple Frame TVs creating an art gallery',
      client: 'Beacon Hill Condo',
      features: ['Multiple displays', 'Synchronized content', 'Custom framing']
    },
    {
      id: 5,
      title: 'Outdoor Entertainment Area',
      category: 'home-theater',
      image: 'https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Weather-resistant outdoor theater setup',
      client: 'Brookline Villa',
      features: ['Weatherproof TV', 'Outdoor audio', 'Landscape lighting']
    },
    {
      id: 6,
      title: 'Minimalist Frame TV Setup',
      category: 'frame-tv',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean, cable-free installation',
      client: 'South End Apartment',
      features: ['Invisible cables', 'Voice control', 'Smart home integration']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See our latest installations and transformations across Greater Boston
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-blue-600 text-sm font-medium">{project.client}</p>
                </div>
                
                <p className="text-gray-600">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold flex items-center space-x-2 mx-auto">
            <span>View Full Portfolio</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;