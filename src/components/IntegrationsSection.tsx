
import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    'Epic', 'Athenahealth', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks'
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="glass rounded-xl p-4 mb-4">
            <p className="text-lg font-bold text-[#1C315B] mb-2">
              952,313 edge cases
            </p>
            <p className="text-sm text-gray-700">
              from millions of patient interactions—tailored by organization, specialty, provider, and region.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex space-x-4 overflow-x-auto">
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="glass rounded-lg p-3 text-center hover:scale-105 transition-all duration-300 min-w-[120px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-sm font-semibold text-[#1C315B]">
                  {integration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
