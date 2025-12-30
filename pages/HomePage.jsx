import React from "react";
import { Link } from "react-router-dom";
import picture from "../img/myimage.jpg";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";
import StatsCard from "../components/StatsCard";

const HomePage = ({ darkMode }) => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "10K+" },
  ];

  const socialIcons = [
    { Icon: FiGithub, href: "https://github.com/shuddy05" },
    { Icon: FiLinkedin, href: "#" },
    {
      Icon: FiMail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=horlabodehyibrahim@gmail.com",
    },
  ];

  return (
    <main>
      <div className=" layout flex flex-col-reverse md:flex-row items-center justify-between ">
        <section className="w-100">
          <img className=" md:w-50 md:h-50 rounded-full object-cover " src={picture} alt="" />
        </section>
        <section className=" flex items-center justify-center relative p-6 ">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-6 inline-block animate-fadeIn">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  darkMode
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                } border ${
                  darkMode ? "border-cyan-500/20" : "border-cyan-200"
                }`}
              >
                👋 Available for Freelance
              </span>
            </div>

            <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight animate-fadeInUp">
              Crafting Digital
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experiences That Matter
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl mb-12 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              } max-w-3xl mx-auto animate-fadeInUp`}
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer specializing in building exceptional web
              applications with React, Next.js, Node.js, Express.js and modern
              technologies
            </p>

            <div
              className="flex flex-wrap gap-4 justify-center animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Hire Me <FiZap className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className={`px-8 py-4 rounded-lg font-semibold border-2 ${
                  darkMode
                    ? "border-slate-700 hover:bg-slate-800"
                    : "border-slate-300 hover:bg-slate-100"
                } transition-all duration-300 hover:scale-105 flex items-center gap-2`}
              >
                View Work <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div
              className="mt-16 flex justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              {socialIcons.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  className={`p-3 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-slate-100 hover:bg-slate-200"
                  } transition-all hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
