import React from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`max-w-4xl w-full ${
          darkMode ? "bg-slate-900" : "bg-white"
        } rounded-2xl overflow-hidden animate-scaleIn`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-lg hover:bg-slate-800 transition-all hover:scale-110"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Problem
              </h3>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Solution
              </h3>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                {project.solution}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full ${
                      darkMode ? "bg-slate-800" : "bg-slate-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold text-center transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiGithub className="w-5 h-5" />
              View Code
            </a>
            <a
              href={project.live}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-center hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
