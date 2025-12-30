import React from "react";
import { FiMail, FiPhone, FiGlobe, FiZap } from "react-icons/fi";
import { contactInfo } from "../constants/data";

const ContactPage = ({ darkMode }) => {
  const iconMap = {
    Mail: FiMail,
    Phone: FiPhone,
    Globe: FiGlobe,
  };

  return (
    <section className="min-h-screen py-32 px-6 relative pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Work Together
          </h1>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have a project in mind? Let's make it happen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((contact, idx) => {
              const IconComponent = iconMap[contact.icon];
              
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-slate-900/50" : "bg-slate-50"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-slate-800" : "border-slate-200"
                  } hover:border-cyan-500/50 transition-all hover:scale-105 animate-fadeInUp`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <IconComponent className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  {contact.value ? (
                    <a
                      href={contact.href}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div className="flex gap-4">
                      {["LinkedIn", "GitHub", "Twitter"].map((social, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-slate-900/50" : "bg-slate-50"
            } backdrop-blur-sm border ${
              darkMode ? "border-slate-800" : "border-slate-200"
            } animate-fadeInUp`}
            style={{ animationDelay: "0.3s" }}
          >
            <form className="space-y-4">
              <div>
                <label
                  className={`block mb-2 font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-300"
                  } border focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-300"
                  } border focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Project Budget
                </label>
                <select
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-300"
                  } border focus:border-cyan-500 focus:outline-none transition-colors`}
                >
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $20,000</option>
                  <option>$20,000+</option>
                </select>
              </div>

              <div>
                <label
                  className={`block mb-2 font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Project Details
                </label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-300"
                  } border focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message <FiZap className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
