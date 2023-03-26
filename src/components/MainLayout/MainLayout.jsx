import React, { useContext } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ThemeContext from "../../ThemeContext";

function MainLayout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} flex flex-col min-h-screen text-slate-200 bg-slate-50 dark:bg-slate-900 `}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow bg-gray-200 dark:bg-slate-900 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
