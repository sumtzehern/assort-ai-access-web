
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-healthcare-gradient min-h-[80vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-white/3 rounded-full animate-pulse-blue"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Answer Calls with 
                <span className="block text-healthcare-blue-light">
                  Specialty-Specific
                </span>
                <span className="block">
                  Generative AI
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Trusted voice AI solutions fine-tuned to your specialty and practice—free your team from routine calls and your patients from waiting on hold.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-healthcare-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Talk to an Expert →
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-healthcare-blue px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-lg font-medium">Interactive Demo</p>
                  <p className="text-sm text-white/70">See AI in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
