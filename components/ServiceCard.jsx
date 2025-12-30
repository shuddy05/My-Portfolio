import React from "react";
import { FiChevronRight } from "react-icons/fi";
import * as Icons from "react-icons/fi";

const ServiceCard = ({ service, darkMode, delay }) => {
  // Map icon names to actual icon components
  const iconMap = {
    Globe: Icons.FiGlobe,
    Palette: Icons.FiEdit3,
    Database: Icons.FiDatabase,
    Code: Icons.FiCode,
  };

  const IconComponent = iconMap[service.icon] || Icons.FiCode;

  return (
    <div
      className={`p-8 rounded-2xl ${
        darkMode
          ? "bg-slate-900/50 hover:bg-slate-800/50"
          : "bg-slate-50 hover:bg-slate-100"
      } backdrop-blur-sm border ${
        darkMode
          ? "border-slate-800 hover:border-cyan-500/50"
          : "border-slate-200 hover:border-cyan-400"
      } transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer group animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} mb-4`}>
        {service.description}
      </p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <FiChevronRight className="w-4 h-4 text-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        {service.price}
      </p>
    </div>
  );
};

export default ServiceCard;
