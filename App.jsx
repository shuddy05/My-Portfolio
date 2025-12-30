import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import "./styles/animations.css";

const Portfolio = () => {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Trigger animation on route change
  React.useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}
    >
      <AnimatedBackground darkMode={darkMode} />
      <PageTransition isAnimating={isAnimating} />

      <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />

      <div
        className={`transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
          <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
          <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
          <Route path="/blog" element={<BlogPage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        </Routes>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
