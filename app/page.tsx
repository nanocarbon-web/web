'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import PropertiesGrid from './components/PropertiesGrid';
import InteractiveLab from './components/InteractiveLab';
import ModelCatalog from './components/ModelCatalog';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000000', color: '#f5f5f7' }}>
      {/* Apple-style minimalist navigation */}
      <Navbar />

      <main>
        {/* Confident, high-end Hero section with borderless product */}
        <Hero />

        {/* Real Product Testing Videos (Aplastamiento, Flexibilidad, Montaje) */}
        <VideoShowcase />

        {/* Apple Bento Grid of Properties */}
        <PropertiesGrid />

        {/* Real Comparison Benchmark: NanoCarbón vs Vidrio Común */}
        <InteractiveLab />

        {/* Model Compatibility & Availability Explorer */}
        <ModelCatalog />

        {/* Real Product & Packaging Presentation */}
        <ProductGallery />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Floating Direct Contact & Orders WhatsApp Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
