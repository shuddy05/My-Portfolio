import React from "react";

const AnimatedBackground = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? "bg-purple-500" : "bg-purple-300"
        } animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? "bg-cyan-500" : "bg-cyan-300"
        } animate-pulse`}
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
