
import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [patientInteractions, setPatientInteractions] = useState(0);
  const [newPatients, setNewPatients] = useState(0);
  const [operationalCosts, setOperationalCosts] = useState(0);
  const [goLive, setGoLive] = useState(0);

  useEffect(() => {
    const duration = 2000;
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
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Patient Interactions */}
          <div className="glass rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-[#1C315B] mb-1">
              {patientInteractions.toLocaleString()}
            </div>
            <div className="text-gray-600 text-sm">Patient Interactions</div>
            <div className="text-xs text-gray-500 mt-1">with Assort's Voice AI</div>
          </div>

          {/* Net New Patients */}
          <div className="glass rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-green-600 mb-1">
              +{newPatients}%
            </div>
            <div className="text-gray-600 text-sm">Net New Patients</div>
            <div className="text-xs text-gray-500 mt-1">average increase</div>
          </div>

          {/* Operational Costs */}
          <div className="glass rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-[#1C315B] mb-1">
              -{operationalCosts}%
            </div>
            <div className="text-gray-600 text-sm">Operational Costs</div>
            <div className="text-xs text-gray-500 mt-1">reduction achieved</div>
          </div>

          {/* Go Live */}
          <div className="glass rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-orange-500 mb-1">
              {goLive} weeks
            </div>
            <div className="text-gray-600 text-sm">Go Live</div>
            <div className="text-xs text-gray-500 mt-1">implementation time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
