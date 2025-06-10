
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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1C315B] mb-2">
            Top performing AI agents tailored to your specialty
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.name}
              className="glass glass-hover rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {specialty.icon}
              </div>
              <h3 className="text-sm font-medium text-[#1C315B]">
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
