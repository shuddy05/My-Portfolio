import React, { useState } from "react";
import { projects, projectCategories } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const ProjectsPage = ({ darkMode }) => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  return (
    <section className="min-h-screen py-32 px-6 relative pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Featured Projects
          </h1>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Real-world solutions for real-world problems
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all hover:scale-105 ${
                filterCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              onClick={() => setSelectedProject(project)}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};

export default ProjectsPage;
