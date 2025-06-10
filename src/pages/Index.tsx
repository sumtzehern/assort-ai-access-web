
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RoverSection from '@/components/RoverSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RoverSection />
      <SpecialtiesSection />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
