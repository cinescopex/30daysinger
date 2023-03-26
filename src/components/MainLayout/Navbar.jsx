import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center flex-wrap bg-gray-800 p-4">
      <Logo />
      <div className="flex flex-col items-center text-white dark:text-blue-400">
        <span className="font-normal text-xl tracking-tighter">
          Welcome back
        </span>
        <span className="font-normal text-lg tracking-tighter">marcelo</span>
      </div>
      <div className="block lg:hidden">
        <AiOutlineMenu className="flex items-center text-white dark:text-white h-8 w-8"></AiOutlineMenu>
      </div>
    </nav>
  );
};

export default Navbar;
