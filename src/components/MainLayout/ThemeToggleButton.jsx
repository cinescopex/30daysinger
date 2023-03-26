import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggleButton = ({ onClick, theme }) => {
  const [darkMode, setDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (onClick) onClick(!darkMode);
  };

  return (
    <div className="flex flex-col items-center space-y-2 pt-2">
      <button
        className={`relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none ${
          darkMode
            ? "bg-slate-700 text-slate-400 focus-visible:ring-slate-500"
            : "bg-cyan-500 text-cyan-100 focus-visible:ring-cyan-400"
        }`}
        onClick={toggleDarkMode}
        role="switch"
        aria-checked={darkMode}
      >
        <span className="sr-only">Enable dark mode</span>
        <div className="transform transition-transform scale-100 duration-300">
          {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </div>
      </button>
      <span>
        {`${darkMode ? "Dark " : "Light "}`}
        Mode
      </span>
    </div>
  );
};

export default ThemeToggleButton;
