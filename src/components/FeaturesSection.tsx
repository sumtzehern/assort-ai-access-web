
import React from 'react';
import { Clock, Users, Calendar, Heart, Search, Mail, Plus, CheckCircle, ArrowUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Appointment Management'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Switchboard: Provider Triage'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Patient Case Creation'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'Fill Cancellations'
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Prescription Refills'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'SMS Recovery'
    },
    {
      icon: <Plus className="w-5 h-5" />,
      title: 'Self Scheduling'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Multilingual Support'
    },
    {
      icon: <ArrowUp className="w-5 h-5" />,
      title: 'Bespoke Workflow'
    }
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1C315B] mb-2">
            Patient access automation across all channels
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass glass-hover rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-[#1C315B] mb-2 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-sm font-medium text-[#1C315B]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
