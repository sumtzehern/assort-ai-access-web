
import React from 'react';

const RoverSection = () => {
  const clinics = [
    'Summit Medical Group', 'Coastal Health Partners', 'Metropolitan Clinic', 
    'Valley Care Network', 'Central Medical Associates', 'Regional Health System',
    'Premier Family Medicine', 'Advanced Specialty Care', 'Community Health Centers'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-healthcare-blue-light/20 to-healthcare-blue/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by leading healthcare organizations
          </h3>
          <div className="bg-healthcare-blue text-white rounded-full px-8 py-3 inline-block text-lg font-semibold shadow-lg">
            Millions of patient calls every year
          </div>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...clinics, ...clinics].map((clinic, index) => (
              <div
                key={`${clinic}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow min-w-[250px]"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-healthcare-blue rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{clinic}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default RoverSection;
