import React from 'react';
import { Award, Users, Clock, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '8+', label: 'Years Experience', icon: Clock },
    { number: '1,000+', label: 'Happy Customers', icon: Users },
    { number: '100%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  const team = [
    {
      name: 'Mike Johnson',
      role: 'Founder & Lead Technician',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years specializing in Samsung Frame TV installations'
    },
    {
      name: 'Sarah Chen',
      role: 'Home Theater Designer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in luxury home theater design and acoustics'
    },
    {
      name: 'David Rodriguez',
      role: 'Audio Systems Specialist',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Multi-room audio and smart home integration expert'
    }
  ];

  const certifications = [
    'Samsung Authorized Dealer',
    'CEDIA Certified',
    'Massachusetts Licensed Contractor',
    'Insured & Bonded'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Interior Customs Inc.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 8 years, we've been Greater Boston's premier destination for Samsung Frame TV installations and high-end home theater solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                What started as a passion for perfect installations has grown into Boston's most trusted name in residential audio and video. We specialize in Samsung Frame TV mounting with custom recessed boxes, creating that perfect "art on the wall" appearance that makes your TV virtually disappear when not in use.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                As an authorized Samsung dealer, we don't just install your Frame TV – we sell them too, ensuring you get the best prices and authentic products with full warranty coverage.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Certifications & Credentials:</h3>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional TV installation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating the perfect entertainment experience for your home
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-md">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Founder & Lead Technician</h4>
              <p className="text-blue-600 font-semibold mb-3">Interior Customs Inc.</p>
              <p className="text-gray-600">8+ years specializing in Samsung Frame TV installations and home theater solutions</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;