import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HappyHour from './components/HappyHour';
import TikTokFeed from './components/TikTokFeed';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-raki-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <HappyHour />
        <TikTokFeed />
        <Booking />
        <FAQ />
        <Location />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}

export default App;