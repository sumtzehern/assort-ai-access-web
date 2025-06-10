
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Sophisticated animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C315B] via-[#142648] to-[#1C315B]"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B9DCFF]/10 rounded-full animate-float blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-white/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-[#B9DCFF]/5 rounded-full animate-float blur-3xl" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid overlay for depth */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Announcement badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#B9DCFF] text-sm font-medium">
            <span className="w-2 h-2 bg-[#B9DCFF] rounded-full mr-3 animate-pulse"></span>
            Trusted by 500+ healthcare organizations
          </div>
          
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white">
              Answer Calls with
              <span className="block text-[#B9DCFF] mt-4">
                Specialty-Specific
              </span>
              <span className="block mt-4">
                Generative AI
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
              Enterprise-grade voice AI solutions fine-tuned to your specialty and practice—free your team from routine calls and your patients from waiting on hold.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button size="lg" className="glass-button bg-white text-[#1C315B] hover:bg-white/90 px-10 py-4 text-lg font-bold rounded-2xl h-16 min-w-[240px] shadow-2xl">
              Talk to an Expert →
            </Button>
            <Button variant="outline" size="lg" className="glass-button border-2 border-[#B9DCFF]/50 text-white hover:bg-[#B9DCFF]/10 hover:border-[#B9DCFF] px-10 py-4 text-lg font-semibold rounded-2xl h-16 min-w-[240px] backdrop-blur-md">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
