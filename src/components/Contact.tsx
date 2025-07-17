import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(617) 331-4493',
      subtitle: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@interiorcustoms.com',
      subtitle: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Boston, MA',
      subtitle: 'Serving all of Greater Boston'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM',
      subtitle: 'Sat: 9AM-4PM, Sun: Closed'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="frame-tv-mounting">Samsung Frame TV Mounting</option>
                  <option value="recessed-box">Recessed Box Installation</option>
                  <option value="home-theater">Home Theater Setup</option>
                  <option value="audio-system">Audio System Installation</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                
                <button
                  type="button"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Call</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600">
                We're here to help! Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-4">Emergency Service Available</h4>
              <p className="mb-4">
                Need same-day installation or emergency repairs? We offer emergency services for existing customers.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;