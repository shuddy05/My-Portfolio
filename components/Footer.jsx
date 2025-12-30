import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = ({ darkMode }) => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  
  const services = ["Web Development", "UI/UX Design", "API Development", "Consulting"];

  return (
    <footer
      className={`py-12 px-6 border-t ${
        darkMode
          ? "border-slate-800 bg-slate-900/50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              DevPortfolio
            </h3>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Building exceptional digital experiences with modern technologies
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      darkMode
                        ? "text-slate-400 hover:text-cyan-400"
                        : "text-slate-600 hover:text-cyan-600"
                    } transition-colors capitalize`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className={`p-3 rounded-lg ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-slate-200 hover:bg-slate-300"
                } transition-all hover:scale-110`}
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-3 rounded-lg ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-slate-200 hover:bg-slate-300"
                } transition-all hover:scale-110`}
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-3 rounded-lg ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-slate-200 hover:bg-slate-300"
                } transition-all hover:scale-110`}
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`pt-8 border-t ${
            darkMode ? "border-slate-800" : "border-slate-200"
          } text-center ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          <p>
            © 2025 DevPortfolio. All rights reserved. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
