
import React from 'react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See our AI agent in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our voice AI handles real patient interactions with empathy, accuracy, and efficiency.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark flex items-center justify-center relative">
            {/* Video placeholder */}
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors cursor-pointer group">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Interactive Demo Video</h3>
              <p className="text-white/80 text-lg">See real patient call scenarios handled by AI</p>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute top-6 left-6 bg-white/90 rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium text-gray-900">Live Call</div>
              <div className="text-xs text-gray-600">Appointment Scheduling</div>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-white/90 rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium text-healthcare-accent">Call Resolved</div>
              <div className="text-xs text-gray-600">Duration: 2:34</div>
            </div>
          </div>
          
          <div className="p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-healthcare-blue mb-2">2.3s</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-healthcare-accent mb-2">94%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-healthcare-warning mb-2">99.1%</div>
                <div className="text-gray-600">Call Resolution Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-healthcare-blue text-white px-10 py-4 rounded-lg hover:bg-healthcare-blue-dark transition-colors font-semibold text-lg shadow-lg hover:shadow-xl mr-4">
            Schedule Live Demo
          </button>
          <button className="border-2 border-healthcare-blue text-healthcare-blue px-10 py-4 rounded-lg hover:bg-healthcare-blue hover:text-white transition-colors font-semibold text-lg">
            Try Interactive Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
