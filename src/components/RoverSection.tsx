
import React from 'react';

const RoverSection = () => {
  const clinics = [
    'Summit Medical Group', 'Coastal Health Partners', 'Metropolitan Clinic', 
    'Valley Care Network', 'Central Medical Associates', 'Regional Health System',
    'Premier Family Medicine', 'Advanced Specialty Care', 'Community Health Centers'
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-[#1C315B]/10 to-[#B9DCFF]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-[#1C315B] rounded-full px-6 py-2 inline-block text-sm font-semibold shadow-lg">
            Millions of patient calls every year
          </div>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...clinics, ...clinics].map((clinic, index) => (
              <div
                key={`${clinic}-${index}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-white/20 transition-all min-w-[200px]"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#1C315B]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-[#1C315B] rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700">{clinic}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoverSection;
