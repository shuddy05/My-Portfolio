import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, darkMode, onClick, delay }) => {
  return (
    <div
      className={`group rounded-2xl overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-slate-50"
      } backdrop-blur-sm border ${
        darkMode ? "border-slate-800" : "border-slate-200"
      } hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30 capitalize backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p
          className={`${
            darkMode ? "text-slate-400" : "text-slate-600"
          } mb-4 line-clamp-2`}
        >
          {project.problem}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-sm rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:gap-3"
          >
            <FiGithub className="w-5 h-5" />
            Code
          </a>
          <a
            href={project.live}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:gap-3"
          >
            <FiExternalLink className="w-5 h-5" />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
