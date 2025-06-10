
import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [patientInteractions, setPatientInteractions] = useState(0);
  const [newPatients, setNewPatients] = useState(0);
  const [operationalCosts, setOperationalCosts] = useState(0);
  const [goLive, setGoLive] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const animateCounter = (setter: any, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
    };

    const timer = setTimeout(() => {
      animateCounter(setPatientInteractions, 13124934);
      animateCounter(setNewPatients, 3);
      animateCounter(setOperationalCosts, 63);
      animateCounter(setGoLive, 5);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-healthcare-blue/5 to-healthcare-blue-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results Across Healthcare
          </h2>
          <p className="text-xl text-gray-600">
            Real impact from millions of patient interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Patient Interactions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-healthcare-blue mb-2">
              {patientInteractions.toLocaleString()}
            </div>
            <div className="text-gray-600 text-lg">Patient Interactions</div>
            <div className="text-sm text-gray-500 mt-2">with Assort's Voice AI</div>
          </div>

          {/* Net New Patients */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-healthcare-accent mb-2">
              +{newPatients}%
            </div>
            <div className="text-gray-600 text-lg">Net New Patients</div>
            <div className="text-sm text-gray-500 mt-2">average increase</div>
          </div>

          {/* Operational Costs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-healthcare-blue mb-2">
              -{operationalCosts}%
            </div>
            <div className="text-gray-600 text-lg">Operational Costs</div>
            <div className="text-sm text-gray-500 mt-2">reduction achieved</div>
          </div>

          {/* Go Live */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-healthcare-warning mb-2">
              {goLive} weeks
            </div>
            <div className="text-gray-600 text-lg">Go Live</div>
            <div className="text-sm text-gray-500 mt-2">implementation time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
