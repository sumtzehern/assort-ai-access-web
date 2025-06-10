
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Advanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/3 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#B9DCFF]/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-white/2 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-[#B9DCFF]/15 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }}></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C315B]/80 via-[#142648]/70 to-[#1C315B]/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Answer Calls with 
                <span className="block text-[#B9DCFF] font-black">
                  Specialty-Specific
                </span>
                <span className="block font-black">
                  Generative AI
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                Trusted voice AI solutions fine-tuned to your specialty and practice—free your team from routine calls and your patients from waiting on hold.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glass-button bg-white text-[#1C315B] hover:bg-white/90 px-8 py-4 text-lg font-bold rounded-full h-12 min-w-[200px]">
                Talk to an Expert →
              </Button>
              <Button variant="outline" size="lg" className="glass-button border-2 border-[#B9DCFF]/50 text-white hover:bg-[#B9DCFF]/10 hover:border-[#B9DCFF] px-8 py-4 text-lg font-semibold rounded-full h-12 min-w-[200px]">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-strong rounded-2xl p-8 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/20">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-[#B9DCFF]/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                    <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-xl font-bold mb-2">Interactive Demo</p>
                  <p className="text-sm text-white/70 font-medium">See AI in action</p>
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
