import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#546E7A] font-['Inter'] selection:bg-[#E91E63] selection:text-white">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <Gallery />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
