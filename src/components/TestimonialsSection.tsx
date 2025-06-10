
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Assort Health's AI has been a game-changer for our practice—patient communication has never been smoother.",
      author: "Dr. William Chen",
      title: "Dermatology",
      avatar: "👨‍⚕️"
    },
    {
      quote: "Our patients love the 24/7 availability and our staff appreciates the reduced call volume during peak hours.",
      author: "Dr. Sarah Johnson",
      title: "Family Medicine",
      avatar: "👩‍⚕️"
    },
    {
      quote: "The specialty-specific training really shows. The AI understands our cardiology terminology and protocols perfectly.",
      author: "Dr. Michael Rodriguez",
      title: "Cardiology",
      avatar: "👨‍⚕️"
    },
    {
      quote: "Implementation was seamless and patient satisfaction scores have increased significantly since we went live.",
      author: "Dr. Emily Thompson",
      title: "Pediatrics",
      avatar: "👩‍⚕️"
    },
    {
      quote: "The multilingual support has been crucial for our diverse patient population. Truly impressive technology.",
      author: "Dr. David Kim",
      title: "Orthopedics",
      avatar: "👨‍⚕️"
    }
  ];

  return (
    <section className="py-20 bg-healthcare-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What healthcare professionals say
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Trusted by thousands of healthcare providers nationwide
          </p>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-96 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-6">"</div>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-white/70">
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
