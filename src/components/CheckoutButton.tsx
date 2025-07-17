import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ShoppingCart, Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  productName: string;
  price: number; // in cents
  productId: string;
  className?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ 
  productName, 
  price, 
  productId, 
  className = "" 
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      // In a real implementation, you'd call your backend to create a checkout session
      // For now, we'll show an alert with the product info
      alert(`Checkout for ${productName} - $${(price / 100).toFixed(2)}\n\nTo complete Stripe setup:\n1. Get your Stripe keys from dashboard.stripe.com\n2. Add them to .env.local\n3. Create a backend endpoint for checkout sessions`);
      
      // Example of what the real implementation would look like:
      /*
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          productName,
          price,
        }),
      });
      
      const session = await response.json();
      
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });
      
      if (result?.error) {
        console.error(result.error.message);
      }
      */
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" />
          <span>ADD TO CART</span>
        </>
      )}
    </button>
  );
};

export default CheckoutButton;