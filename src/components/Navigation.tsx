
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-[#1C315B]/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center text-white">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
                <span className="text-2xl font-bold tracking-tight">Assort Health</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#features" className="text-white/80 hover:text-white px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-lg">
                Features
              </a>
              <a href="#case-studies" className="text-white/80 hover:text-white px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-lg">
                Case Studies
              </a>
              <a href="#blog" className="text-white/80 hover:text-white px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-lg">
                Blog
              </a>
              <a href="#pricing" className="text-white/80 hover:text-white px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-lg">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5 font-medium">
              Log In
            </Button>
            <Button 
              className="bg-[#B9DCFF] text-[#1C315B] hover:bg-[#B9DCFF]/90 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
