import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Reviews />
      <Portfolio />
      <Blog />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;