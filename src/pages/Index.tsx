
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import RoverSection from '@/components/RoverSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <RoverSection />
      <SpecialtiesSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <Footer />
    </div>
  );
};

export default Index;
