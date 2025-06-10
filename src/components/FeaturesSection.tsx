
import React from 'react';
import { Clock, Users, Calendar, Heart, Search, Mail, Plus, CheckCircle, ArrowUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Appointment Management',
      description: 'Round-the-clock scheduling and rescheduling'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Switchboard: Provider Triage',
      description: 'Smart routing and FAQ handling'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Patient Case Creation',
      description: 'Automated case documentation'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Fill Cancellations',
      description: 'Automatic waitlist management'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Prescription Refills',
      description: 'Streamlined refill processing'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'SMS Recovery',
      description: 'Text-based patient engagement'
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: 'Self Scheduling',
      description: 'Patient-driven appointment booking'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Multilingual Support',
      description: 'Global language accessibility'
    },
    {
      icon: <ArrowUp className="w-6 h-6" />,
      title: 'Bespoke Workflow',
      description: 'Custom automation solutions'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#1C315B] mb-4 tracking-tight">
            Patient access automation across all channels
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-[#1C315B] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1C315B] mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
