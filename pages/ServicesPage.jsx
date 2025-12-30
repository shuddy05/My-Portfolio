import React from "react";
import { services, testimonials } from "../constants/data";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const ServicesPage = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-32 px-6 relative pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Services & Expertise
          </h1>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Don't just take my word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
