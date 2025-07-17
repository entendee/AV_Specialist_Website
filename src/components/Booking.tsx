import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const services = [
    {
      id: 'frame-tv-mount',
      name: 'Samsung Frame TV Mounting',
      price: '$199',
      duration: '2-3 hours',
      description: 'Professional mounting with cable concealment'
    },
    {
      id: 'recessed-box',
      name: 'Recessed Box Installation',
      price: '$299',
      duration: '3-4 hours',
      description: 'Custom recessed box for flush wall appearance'
    },
    {
      id: 'home-theater',
      name: 'Home Theater Setup',
      price: '$899',
      duration: '4-6 hours',
      description: 'Complete home theater design and installation'
    },
    {
      id: 'audio-system',
      name: 'Audio System Installation',
      price: '$599',
      duration: '3-5 hours',
      description: 'Multi-room or surround sound setup'
    },
    {
      id: 'consultation',
      name: 'Free Consultation',
      price: 'Free',
      duration: '1 hour',
      description: 'On-site assessment and quote'
    }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle booking submission
    console.log('Booking submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      contact: contactInfo
    });
    setStep(4);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Service</h2>
          <p className="text-xl text-gray-600">
            Schedule your installation or consultation in just a few simple steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > stepNumber ? <CheckCircle className="w-6 h-6" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-24 h-1 mx-4 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Select Service</span>
            <span>Choose Date & Time</span>
            <span>Contact Info</span>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Select Your Service</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-gray-900">{service.name}</h4>
                    <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-6">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedService}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
              >
                Continue to Date & Time
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Choose Date & Time</h3>
            
            {/* Date Selection */}
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Select Date
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                {availableDates.map((date, index) => {
                  const dateStr = date.toISOString().split('T')[0];
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(dateStr)}
                      className={`p-3 text-center rounded-lg border transition-all duration-200 ${
                        selectedDate === dateStr
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {date.getDate()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Select Time
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-center rounded-lg border transition-all duration-200 ${
                        selectedTime === time
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center space-x-4 pt-6">
              <button
                onClick={() => setStep(1)}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!selectedDate || !selectedTime}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
              >
                Continue to Contact Info
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Contact Information</h3>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactInfo.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={contactInfo.address}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Installation address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                value={contactInfo.notes}
                onChange={handleContactChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Any specific requirements or questions..."
              ></textarea>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <button
                onClick={() => setStep(2)}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!contactInfo.name || !contactInfo.email || !contactInfo.phone || !contactInfo.address}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for choosing Interior Customs Inc. We've received your booking and will contact you within 2 hours to confirm the details.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-4">Booking Details</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Contact:</strong> {contactInfo.name}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1);
                setSelectedService('');
                setSelectedDate('');
                setSelectedTime('');
                setContactInfo({ name: '', email: '', phone: '', address: '', notes: '' });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Book Another Service
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;