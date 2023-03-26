import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeContext from "../../ThemeContext";

function MainLayout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} flex flex-col min-h-screen text-slate-200 dark:bg-slate-900`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="bg-gray-200 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
