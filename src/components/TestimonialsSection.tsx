
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Assort Health's AI has been a game-changer for our practice—patient communication has never been smoother.",
      author: "Dr. William Chen",
      title: "Dermatology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Our patients love the 24/7 availability and our staff appreciates the reduced call volume during peak hours.",
      author: "Dr. Sarah Johnson",
      title: "Family Medicine", 
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The specialty-specific training really shows. The AI understands our cardiology terminology perfectly.",
      author: "Dr. Michael Rodriguez",
      title: "Cardiology",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-[#1C315B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Trusted by Healthcare Professionals
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex space-x-8 w-max pb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 w-96 hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/20"
              >
                <div className="text-3xl mb-6 text-[#B9DCFF]">"</div>
                <p className="text-white text-lg leading-relaxed mb-8 font-medium">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-[#B9DCFF]/30"
                  />
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-[#B9DCFF] text-sm font-medium">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
