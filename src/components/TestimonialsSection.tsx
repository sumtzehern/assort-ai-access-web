
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Assort Health's AI has been a game-changer for our practice—patient communication has never been smoother.",
      author: "Dr. William Chen",
      title: "Dermatology"
    },
    {
      quote: "Our patients love the 24/7 availability and our staff appreciates the reduced call volume during peak hours.",
      author: "Dr. Sarah Johnson",
      title: "Family Medicine"
    },
    {
      quote: "The specialty-specific training really shows. The AI understands our cardiology terminology perfectly.",
      author: "Dr. Michael Rodriguez",
      title: "Cardiology"
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="flex space-x-4 w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 w-80 hover:scale-105 transition-all duration-300"
              >
                <div className="text-lg mb-3">"</div>
                <p className="text-[#1C315B] text-sm leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="text-lg mr-3">👨‍⚕️</div>
                  <div>
                    <div className="text-[#1C315B] font-semibold text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-xs">
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
