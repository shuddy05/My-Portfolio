import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navigation = ({ darkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkClass = ({ isActive }) => `
    capitalize transition-all hover:text-cyan-400 hover:scale-105 
    ${isActive ? "text-cyan-400 font-semibold" : ""}
  `;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? "bg-slate-900/80" : "bg-white/80"
      } backdrop-blur-lg border-b ${
        darkMode ? "border-slate-800" : "border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            DevPortfolio
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={getLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  block w-full text-left capitalize py-2 transition-colors hover:text-cyan-400
                  ${isActive ? "text-cyan-400" : ""}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
