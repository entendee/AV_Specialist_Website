# Home Theater & Audio Website

A modern, responsive website for Home Theater & Audio , specializing in Samsung Frame TV mounting and home theater installations

## Features

- **E-commerce Integration**: Stripe-powered checkout for Samsung Frame TVs and services
- **Online Booking**: Calendly integration for service appointments
- **Responsive Design**: Optimized for all devices
- **Product Showcase**: Featured Samsung Frame TVs with pricing
- **Service Portfolio**: Gallery of completed installations
- **Customer Reviews**: 300+ five-star reviews display
- **Blog Section**: Expert content on home theater and audio

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file with:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Calendly Configuration
VITE_CALENDLY_URL=https://calendly.com/your-username/frame-tv-consultation
```

### 2. Stripe Setup

1. Create account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add keys to `.env.local`
4. Create a backend endpoint for checkout sessions (see `/src/components/CheckoutButton.tsx`)

### 3. Calendly Setup

1. Create account at [calendly.com](https://calendly.com)
2. Set up your booking page
3. Add your Calendly URL to `.env.local`

### 4. Deployment

#### Deploy to Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

#### Deploy to Netlify:
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure environment variables

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Next Steps

1. **Complete Stripe Integration**: Create backend API for checkout sessions
2. **Add Real Product Data**: Connect to your inventory system
3. **Customize Calendly**: Set up specific booking types for different services
4. **Add Analytics**: Google Analytics, Facebook Pixel, etc.
5. **SEO Optimization**: Meta tags, sitemap, structured data

## Support

For questions about this website, contact the development team or refer to the documentation for:
- [Stripe Documentation](https://stripe.com/docs)
- [Calendly API](https://developer.calendly.com/)
- [Vercel Deployment](https://vercel.com/docs)
