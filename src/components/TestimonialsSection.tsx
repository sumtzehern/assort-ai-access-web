
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Assort Health's AI has transformed our patient communication. Call wait times dropped by 78%, and patient satisfaction scores increased dramatically.",
      author: "Dr. Sarah Chen",
      title: "Chief Medical Officer",
      organization: "Premier Healthcare System",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The specialty-specific training is remarkable. Our cardiology AI understands complex medical terminology and routes calls with 97% accuracy.",
      author: "Dr. Michael Rodriguez",
      title: "Director of Cardiology",
      organization: "Heart Institute of America",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Implementation was seamless. Within 5 weeks, we had a fully functional AI system that integrates perfectly with our Epic EHR.",
      author: "Dr. Jennifer Park",
      title: "VP of Operations",
      organization: "Metro Health Network",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-[#1C315B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#B9DCFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how leading healthcare organizations are transforming patient communication with AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-[#B9DCFF]/50 hover:shadow-2xl hover:shadow-[#B9DCFF]/20"
            >
              {/* Quote */}
              <div className="mb-8">
                <div className="text-4xl text-[#B9DCFF] mb-4 font-serif">"</div>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-[#B9DCFF]/30"
                />
                <div>
                  <div className="text-white font-bold text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-[#B9DCFF] text-sm font-medium">
                    {testimonial.title}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-black text-[#B9DCFF] mb-2">500+</div>
                <div className="text-white/80 text-sm">Healthcare Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#B9DCFF] mb-2">97%</div>
                <div className="text-white/80 text-sm">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#B9DCFF] mb-2">78%</div>
                <div className="text-white/80 text-sm">Reduction in Wait Times</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#B9DCFF] mb-2">24/7</div>
                <div className="text-white/80 text-sm">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
