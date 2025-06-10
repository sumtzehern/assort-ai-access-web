
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-[#1C315B] shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center text-white">
                <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-semibold">Assort Health</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#features" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#case-studies" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Case Studies
              </a>
              <a href="#blog" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Blog
              </a>
              <a href="#pricing" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Button 
              className="bg-[#B9DCFF] text-[#1C315B] hover:bg-[#B9DCFF]/90 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
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
