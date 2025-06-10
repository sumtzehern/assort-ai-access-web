
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top performing AI agents tailored to your specialty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI voice assistants are trained on specialty-specific protocols, terminology, and workflows to deliver exceptional patient experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.name}
              className="bg-gradient-to-br from-healthcare-blue/5 to-healthcare-blue-light/10 rounded-2xl p-6 text-center hover:from-healthcare-blue/10 hover:to-healthcare-blue-light/20 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {specialty.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-healthcare-blue transition-colors">
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your specialty?</p>
          <button className="bg-healthcare-blue text-white px-8 py-3 rounded-lg hover:bg-healthcare-blue-dark transition-colors font-semibold">
            Request Custom Training
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
