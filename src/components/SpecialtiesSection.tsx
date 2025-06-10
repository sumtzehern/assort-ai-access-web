
import React from 'react';

const SpecialtiesSection = () => {
  const specialties = [
    { name: 'Orthopedics', icon: '🦴' },
    { name: 'Cardiology', icon: '❤️' },
    { name: 'Family Medicine', icon: '👨‍⚕️' },
    { name: 'Dermatology', icon: '🧴' },
    { name: 'Optometry', icon: '👁️' },
    { name: 'ENT', icon: '👂' },
    { name: 'Urology', icon: '🩺' },
    { name: 'Behavioral Health', icon: '🧠' },
    { name: 'Plastic Surgery', icon: '✨' },
    { name: 'Oral Surgery', icon: '🦷' },
    { name: 'Pediatrics', icon: '👶' },
    { name: 'Allergy', icon: '🤧' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#1C315B] mb-4 tracking-tight">
            Top performing AI agents tailored to your specialty
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.name}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 cursor-pointer group border border-white/30 backdrop-blur-md"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {specialty.icon}
              </div>
              <h3 className="text-sm font-bold text-[#1C315B] leading-tight">
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
