import React from "react";

const StatsCard = ({ stat, darkMode, delay }) => {
  return (
    <div
      className={`p-6 rounded-xl ${
        darkMode ? "bg-slate-900/50" : "bg-slate-50"
      } backdrop-blur-sm border ${
        darkMode ? "border-slate-800" : "border-slate-200"
      } hover:scale-105 transition-transform animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
        {stat.value}
      </div>
      <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCard;
