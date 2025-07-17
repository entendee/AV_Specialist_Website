import React from 'react';
import { Heart, Eye, Plus } from 'lucide-react';
import CheckoutButton from './CheckoutButton';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Samsung 65" Frame TV (2024)',
      price: '$1,999.99',
      originalPrice: '$2,199.99',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
      features: ['QLED 4K', 'Art Mode', 'Slim Fit Wall Mount Included'],
      priceInCents: 199999,
      originalPriceInCents: 219999,
    },
    {
      id: 2,
      name: 'Samsung 65" Frame Pro Series (2025)',
      price: '$2,499.99',
      originalPrice: '$2,699.99',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Latest Model',
      features: ['Neo QLED 4K', 'SamsungVision AI', 'Wall Mount Included'],
      priceInCents: 249999,
      originalPriceInCents: 269999,
    },
    {
      id: 3,
      name: 'Samsung 55" Frame TV (2024)',
      price: '$1,599.99',
      originalPrice: '$1,799.99',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Popular Choice',
      features: ['QLED 4K', 'Art Mode', 'Slim Profile'],
      priceInCents: 159999,
      originalPriceInCents: 179999,
    },
    {
      id: 4,
      name: 'Recessed Box for Frame TV',
      price: '$299.99',
      image: 'https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Professional Install',
      features: ['Custom Fit', 'Professional Install', 'Cable Management'],
      priceInCents: 29999,
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular Samsung Frame TVs and professional installation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Add to Cart Section */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <CheckoutButton
                    productName={product.name}
                    price={product.priceInCents}
                    productId={product.id.toString()}
                    className="w-full"
                  />
                  <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium text-sm flex items-center justify-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Installation $250</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;