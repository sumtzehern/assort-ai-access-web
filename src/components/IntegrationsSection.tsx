
import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    'Epic', 'Athenahealth', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks', 
    'Practice Fusion', 'Greenway', 'CureMD', 'Kareo', 'DrChrono', 'SimplePractice'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Deep integration with your existing systems
          </h2>
          <div className="bg-gradient-to-br from-healthcare-blue/5 to-healthcare-blue-light/10 rounded-2xl p-8 mb-8">
            <p className="text-2xl font-bold text-healthcare-blue mb-4">
              952,313 edge cases
            </p>
            <p className="text-lg text-gray-700">
              from millions of patient interactions—tailored by organization, specialty, provider, and region.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-healthcare-blue/5 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-lg font-semibold text-gray-900 group-hover:text-healthcare-blue transition-colors">
                {integration}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom integration?</p>
          <button className="bg-healthcare-blue text-white px-8 py-3 rounded-lg hover:bg-healthcare-blue-dark transition-colors font-semibold">
            Contact Our Integration Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
