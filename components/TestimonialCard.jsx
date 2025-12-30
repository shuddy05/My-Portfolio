import React from "react";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ testimonial, darkMode, delay }) => {
  return (
    <div
      className={`p-8 rounded-2xl ${
        darkMode ? "bg-slate-900/50" : "bg-slate-50"
      } backdrop-blur-sm border ${
        darkMode ? "border-slate-800" : "border-slate-200"
      } hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p
        className={`${
          darkMode ? "text-slate-300" : "text-slate-700"
        } mb-6 italic`}
      >
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className={`text-sm ${darkMode ? "text-slate-500" : "text-slate-600"}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
