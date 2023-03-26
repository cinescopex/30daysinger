import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="relative shadow-lg text-sky-900 dark:text-white dark:bg-gray-800 flex justify-between items-center flex-wrap p-4">
      <Logo />
      <div className="flex flex-col items-center">
        <span className="font-normal text-xl tracking-tighter">
          Welcome back
        </span>
        <span className="font-normal text-lg tracking-tighter">marcelo</span>
      </div>
      <div className="block cursor-pointer lg:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <AiOutlineClose className="flex items-center h-8 w-8" />
        ) : (
          <AiOutlineMenu className="flex items-center h-8 w-8" />
        )}
      </div>
      {menuOpen && (
        <Menu theme={theme} toggleTheme={toggleTheme} isMenuOpen={menuOpen} />
      )}
    </nav>
  );
};

export default Navbar;
