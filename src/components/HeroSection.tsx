
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative hero-gradient min-h-[60vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-white/3 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Answer Calls with 
                <span className="block text-[#B9DCFF]">
                  Specialty-Specific
                </span>
                <span className="block">
                  Generative AI
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                Trusted voice AI solutions fine-tuned to your specialty and practice—free your team from routine calls and your patients from waiting on hold.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="glass-button bg-white text-[#1C315B] hover:bg-white/90 px-6 py-3 font-semibold rounded-lg">
                Talk to an Expert →
              </Button>
              <Button variant="outline" size="lg" className="glass-button border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-xl p-6">
              <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="font-medium">Interactive Demo</p>
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
