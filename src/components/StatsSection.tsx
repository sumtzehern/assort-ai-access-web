
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
    <section className="py-16 bg-gradient-to-br from-[#1C315B]/5 to-[#B9DCFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary big number */}
        <div className="text-center mb-12">
          <div className="glass-strong rounded-3xl p-12 mb-8 backdrop-blur-xl border border-white/30">
            <div className="text-8xl font-black text-[#1C315B] mb-4 tracking-tight">
              {patientInteractions.toLocaleString()}
            </div>
            <div className="text-xl text-gray-700 font-semibold">Patient Interactions</div>
            <div className="text-lg text-gray-500 mt-2">with Assort's Voice AI</div>
          </div>
        </div>

        {/* Three mixed-size panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Net New Patients */}
          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/30">
            <div className="text-6xl font-black text-green-600 mb-3">
              +{newPatients}%
            </div>
            <div className="text-lg text-gray-700 font-semibold mb-1">Net New Patients</div>
            <div className="text-sm text-gray-500">average increase</div>
          </div>

          {/* Operational Costs */}
          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/30">
            <div className="text-6xl font-black text-[#1C315B] mb-3">
              -{operationalCosts}%
            </div>
            <div className="text-lg text-gray-700 font-semibold mb-1">Operational Costs</div>
            <div className="text-sm text-gray-500">reduction achieved</div>
          </div>

          {/* Go Live */}
          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/30">
            <div className="text-6xl font-black text-[#B9DCFF] mb-3">
              {goLive} weeks
            </div>
            <div className="text-lg text-gray-700 font-semibold mb-1">Go Live</div>
            <div className="text-sm text-gray-500">implementation time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
