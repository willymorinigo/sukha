import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MapAndLocationSection } from './components/MapAndLocationSection';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [selectedSpecialtyName, setSelectedSpecialtyName] = useState<string>('');
  const [initialMessage, setInitialMessage] = useState<string>('');

  const handleSelectSpecialtyForContact = (specialtyName: string, message: string) => {
    setSelectedSpecialtyName(specialtyName);
    setInitialMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#FCFAED] text-[#1C2A29] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1B9390] selection:text-white pb-16 md:pb-0">
      {/* Sticky Top Header */}
      <Header />

      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* About Section - Philosophy & Human Vision */}
      <AboutSection />

      {/* 13 Specialties Section */}
      <SpecialtiesSection onSelectSpecialtyForContact={handleSelectSpecialtyForContact} />

      {/* Official Credentials & Obras Sociales Banner */}
      <CertificationsSection />

      {/* Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Parent Testimonials from Google Maps & Social Media */}
      <TestimonialsSection />

      {/* Interactive Map & Location in City Bell */}
      <MapAndLocationSection />

      {/* WhatsApp Contact Form with Pre-loaded Templates */}
      <WhatsAppContactSection
        initialSpecialtyName={selectedSpecialtyName}
        initialMessage={initialMessage}
      />

      {/* Job Openings / Careers with CV Upload */}
      <CareersSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* App-Like Mobile Bottom Navigation Dock */}
      <MobileBottomNav />
    </div>
  );
}
