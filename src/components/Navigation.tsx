
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-healthcare-gradient shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center text-white">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Assort Health</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#case-studies" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Case Studies
              </a>
              <a href="#blog" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <a href="#pricing" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-healthcare-blue">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
