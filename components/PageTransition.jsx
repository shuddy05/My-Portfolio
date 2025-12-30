import React from "react";

const PageTransition = ({ isAnimating }) => {
  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 pointer-events-none transition-opacity duration-300 z-40 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
};

export default PageTransition;
