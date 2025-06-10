
import React from 'react';

const StatsSection = () => {
  const mainStat = "13,124,934";
  
  const stats = [
    {
      value: "+3%",
      label: "Net New Patients",
      description: "Average increase in patient acquisition",
      color: "text-green-400"
    },
    {
      value: "-63%",
      label: "Operational Costs",
      description: "Reduction in administrative overhead",
      color: "text-white"
    },
    {
      value: "5 weeks",
      label: "Go Live",
      description: "Average implementation timeline",
      color: "text-[#B9DCFF]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B9DCFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1C315B]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Main stat */}
        <div className="text-center mb-20">
          <div className="glass-strong rounded-3xl p-16 max-w-4xl mx-auto backdrop-blur-xl border border-white/30">
            <h2 className="text-8xl lg:text-9xl font-black text-[#1C315B] mb-6 tracking-tighter">
              {mainStat}
            </h2>
            <p className="text-2xl lg:text-3xl text-[#1C315B]/80 font-semibold">
              Patient interactions powered by AI
            </p>
            <p className="text-lg text-[#1C315B]/60 mt-4 max-w-2xl mx-auto">
              Across 500+ healthcare organizations, our AI has handled millions of patient calls with 97% accuracy
            </p>
          </div>
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/30 hover:border-[#B9DCFF]/50"
            >
              <div className={`text-5xl lg:text-6xl font-black mb-4 ${stat.color}`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-bold text-[#1C315B] mb-2">
                {stat.label}
              </h3>
              <p className="text-[#1C315B]/70 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#1C315B]/60 text-lg mb-6">
            Join leading healthcare organizations transforming patient communication
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#1C315B]/50">
            <span>Mayo Clinic</span>
            <span>•</span>
            <span>Cleveland Clinic</span>
            <span>•</span>
            <span>Kaiser Permanente</span>
            <span>•</span>
            <span>Johns Hopkins</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
