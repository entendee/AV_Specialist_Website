import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Back Bay, Boston',
      rating: 5,
      date: '2 weeks ago',
      platform: 'Google',
      text: 'Absolutely phenomenal work! Mike and his team installed our 75" Samsung Frame TV with a custom recessed box. The installation is flawless - it truly looks like artwork on the wall. Professional, punctual, and the attention to detail is incredible.',
      service: 'Frame TV Installation'
    },
    {
      id: 2,
      name: 'David Chen',
      location: 'Cambridge, MA',
      rating: 5,
      date: '1 month ago',
      platform: 'Thumbtack',
      text: 'Interior Customs exceeded all expectations. They not only sold us the Frame TV at a great price but the installation was perfect. The recessed box makes it completely flush with the wall. Highly recommend!',
      service: 'Frame TV Sales & Installation'
    },
    {
      id: 3,
      name: 'Jennifer Martinez',
      location: 'Newton, MA',
      rating: 5,
      date: '3 weeks ago',
      platform: 'Google',
      text: 'Outstanding service from start to finish. The team was knowledgeable, professional, and the Frame TV installation is absolutely beautiful. They handled everything including the art mode setup. Worth every penny!',
      service: 'Frame TV Mounting'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      location: 'Brookline, MA',
      rating: 5,
      date: '2 months ago',
      platform: 'Thumbtack',
      text: 'Best decision we made for our home theater. The whole-home audio system they installed is incredible, and the Frame TV in our living room is a conversation starter. Professional installation and great customer service.',
      service: 'Home Theater & Audio'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      location: 'Beacon Hill, Boston',
      rating: 5,
      date: '1 month ago',
      platform: 'Google',
      text: 'Mike and his team are true professionals. The Samsung Frame TV installation with recessed box is perfect - you can\'t even tell there\'s a TV there when it\'s in art mode. Excellent work and fair pricing.',
      service: 'Recessed Box Installation'
    },
    {
      id: 6,
      name: 'Robert Kim',
      location: 'South End, Boston',
      rating: 5,
      date: '3 weeks ago',
      platform: 'Thumbtack',
      text: 'Incredible attention to detail and craftsmanship. The Frame TV looks like it was built into the wall. They also helped us choose the perfect size and handled all the setup. Couldn\'t be happier with the results.',
      service: 'Frame TV Consultation & Install'
    }
  ];

  const overallStats = {
    totalReviews: 300,
    averageRating: 5.0,
    googleReviews: 180,
    thumbtackReviews: 120
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it - see why we have 300+ five-star reviews
          </p>
          
          {/* Review Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{overallStats.averageRating}</span>
              <span className="text-gray-600">({overallStats.totalReviews} reviews)</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span>{overallStats.googleReviews} Google Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span>{overallStats.thumbtackReviews} Thumbtack Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded flex items-center justify-center ${
                    review.platform === 'Google' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    <span className="text-white text-xs font-bold">
                      {review.platform[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Service Type */}
              <div className="mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {review.service}
                </span>
              </div>

              {/* Review Text */}
              <div className="relative">
                <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional service that earned us 300+ five-star reviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Get Free Quote
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;