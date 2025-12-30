import { useState } from "react";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return {
    darkMode,
    toggleTheme,
  };
};
