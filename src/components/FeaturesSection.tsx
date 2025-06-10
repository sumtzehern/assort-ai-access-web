
import React from 'react';
import { 
  Clock, 
  Phone, 
  FileText, 
  RefreshCw, 
  Pill, 
  MessageSquare, 
  Calendar, 
  Globe, 
  Settings 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Appointment Management",
      description: "Automated scheduling, rescheduling, and cancellations with intelligent calendar optimization."
    },
    {
      icon: Phone,
      title: "Intelligent Call Routing",
      description: "Smart provider triage, department routing, and FAQ handling with specialty-specific protocols."
    },
    {
      icon: FileText,
      title: "Patient Case Creation",
      description: "Automated case documentation and medical record integration with structured data capture."
    },
    {
      icon: RefreshCw,
      title: "Cancellation Recovery",
      description: "Proactive follow-ups and automated rebooking to minimize lost appointments and revenue."
    },
    {
      icon: Pill,
      title: "Prescription Management",
      description: "Secure refill requests, pharmacy coordination, and provider notification workflows."
    },
    {
      icon: MessageSquare,
      title: "SMS & Voice Recovery",
      description: "Multi-channel patient engagement with personalized follow-up campaigns."
    },
    {
      icon: Calendar,
      title: "Self-Service Scheduling",
      description: "Patient-facing booking portal with real-time availability and smart conflict resolution."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Native language processing in 12+ languages with cultural healthcare context."
    },
    {
      icon: Settings,
      title: "Custom Workflow Automation",
      description: "Bespoke AI workflows tailored to your practice's unique operational requirements."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-slate-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#B9DCFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1C315B]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-[#1C315B] mb-6 tracking-tight">
            Enterprise-Grade AI Features
          </h2>
          <p className="text-xl text-[#1C315B]/80 max-w-4xl mx-auto leading-relaxed">
            Comprehensive patient access automation across all communication channels, designed for healthcare at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/30 hover:border-[#B9DCFF]/50 hover:shadow-2xl hover:shadow-[#B9DCFF]/10 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-[#1C315B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B9DCFF]/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-[#1C315B] group-hover:text-[#1C315B] transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1C315B] mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-[#1C315B]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="mt-20 text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-xl border border-white/30">
            <h3 className="text-3xl font-bold text-[#1C315B] mb-4">
              Ready to Transform Your Patient Communication?
            </h3>
            <p className="text-[#1C315B]/70 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ healthcare organizations already using AI to improve patient access and reduce operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1C315B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1C315B]/90 transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
              <button className="border-2 border-[#1C315B]/20 text-[#1C315B] px-8 py-4 rounded-xl font-semibold hover:border-[#1C315B] transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
