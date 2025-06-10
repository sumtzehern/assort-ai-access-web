
import React from 'react';
import { Clock, Users, Calendar, Heart, Search, Mail, Plus, CheckCircle, ArrowUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Appointment Management',
      description: 'Round-the-clock scheduling, rescheduling, and cancellation handling'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Switchboard: Provider Triage, Routing & FAQ',
      description: 'Intelligent call routing and instant answers to common questions'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient Case Creation',
      description: 'Automated case documentation and medical history capture'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Fill Cancellations & Send Follow-ups',
      description: 'Proactive scheduling optimization and patient engagement'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Prescription Refills',
      description: 'Streamlined medication renewal process with pharmacy coordination'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'SMS Recovery',
      description: 'Automated text messaging for appointment reminders and health tips'
    },
    {
      icon: <Plus className="w-8 h-8" />,
      title: 'Self Scheduling',
      description: 'Patient-initiated appointment booking with real-time availability'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Multilingual Support',
      description: 'Native language support for diverse patient populations'
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: 'Bespoke Workflow Automation',
      description: 'Custom AI workflows tailored to your practice needs'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-healthcare-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patient access automation across all channels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions that handle every aspect of patient communication and practice management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-healthcare-blue group-hover:text-healthcare-blue-dark transition-colors mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-healthcare-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-healthcare-blue text-white px-10 py-4 rounded-lg hover:bg-healthcare-blue-dark transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
