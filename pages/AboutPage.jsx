import React from "react";
import { FiAward, FiBriefcase, FiDownload } from "react-icons/fi";
import { techStack, experience } from "../constants/data";

const AboutPage = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-32 px-6 relative pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Passionate developer with 5+ years of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-slate-900/50" : "bg-slate-50"
            } backdrop-blur-sm border ${
              darkMode ? "border-slate-800" : "border-slate-200"
            } animate-fadeInUp hover:scale-105 transition-transform`}
            style={{ animationDelay: "0.2s" }}
          >
            <FiAward className="w-12 h-12 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-slate-600"
              } mb-6 leading-relaxed`}
            >
              I'm a passionate Full-Stack Developer with expertise in building
              scalable web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions. My journey in tech
              started 5 years ago, and I've been fortunate to work with amazing
              teams and clients worldwide.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold hover:gap-3"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </a>
          </div>

          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-slate-900/50" : "bg-slate-50"
            } backdrop-blur-sm border ${
              darkMode ? "border-slate-800" : "border-slate-200"
            } animate-fadeInUp hover:scale-105 transition-transform`}
            style={{ animationDelay: "0.4s" }}
          >
            <FiBriefcase className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Experience Timeline</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-cyan-500 rounded-full -translate-x-[7px] animate-pulse"></div>
                  <p className="text-sm text-cyan-400 mb-1 font-semibold">
                    {exp.year}
                  </p>
                  <h3 className="font-semibold mb-1">{exp.title}</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-500" : "text-slate-600"
                    } mb-1`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8 animate-fadeInUp">
            Tech Stack & Tools
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-slate-900/50 hover:bg-slate-800/50"
                  : "bg-slate-50 hover:bg-slate-100"
              } backdrop-blur-sm border ${
                darkMode ? "border-slate-800" : "border-slate-200"
              } transition-all duration-300 hover:scale-110 cursor-pointer group animate-fadeInUp`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform`}
              ></div>
              <h3 className="font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
