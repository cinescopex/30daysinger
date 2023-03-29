import React from "react";
import {
  MdHome,
  MdPrivacyTip,
  MdRateReview,
  MdAccessibility,
} from "react-icons/md";
import { TbAffiliateFilled } from "react-icons/tb";
import { GrStackOverflow } from "react-icons/gr";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link } from "react-router-dom";

const Menu = ({ theme, toggleTheme, isMenuOpen }) => (
  <div
    className={`w-fit absolute shadow-2xl top-full right-0 bg-gray-100 dark:bg-gray-800 text-sky-900 dark:text-white z-10 p-4 rounded-b-xl transition duration-300 ease-in-out transform o${
      isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }}`}
  >
    <div className="flex flex-col space-y-2">
      <Link
        to="/"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <MdHome />
        <span>Home</span>
      </Link>
      <Link
        to="/privacy"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <MdPrivacyTip />
        <span>Privacy</span>
      </Link>
      <Link
        to="/reviews"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <MdRateReview />
        <span>Reviews</span>
      </Link>
      <Link
        to="/accessibility"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <MdAccessibility />
        <span>Accessibility</span>
      </Link>
      <Link
        to="/affiliate"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <TbAffiliateFilled />
        <span>Affiliate Program</span>
      </Link>
      <hr className="border-t border-gray-300 dark:border-gray-600" />
      <Link
        to="/technology-stack"
        className="flex items-center space-x-2 hover:underline hover:text-sky-500 hover:cursor-pointer"
      >
        <GrStackOverflow />
        <span>Technology Stack</span>
      </Link>
      <hr className="border-t border-gray-300 dark:border-gray-600" />

      <ThemeToggleButton onClick={toggleTheme} theme={theme} />
    </div>
  </div>
);
export default Menu;
