
import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-[#1C315B] rounded-lg flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-bold text-[#1C315B]">Assort Health</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionizing patient communication with specialty-specific AI voice solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#1C315B]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#1C315B]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#1C315B]">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#1C315B] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Assort Health. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
