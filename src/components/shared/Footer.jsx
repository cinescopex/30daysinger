import React, { useState } from "react";
import LogoH from "./LogoH";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Footer = () => {
  const [clickedLink, setClickedLink] = useState(null);

  useScrollToTop(clickedLink);

  function handleClick() {
    setClickedLink(Date.now());
  }

  return (
    <footer className="text-sky-900 dark:text-white dark:bg-gray-800 p-4">
      <div className="flex">
        <div className="w-full md:w-1/2 text-left md:text-left">
          <LogoH />
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <div className="flex flex-row gap-2">
              <p>&copy; 2023 </p>
              <p> All rights reserved</p>
            </div>
            <a
              href="./"
              className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            >
              30daysinger.com
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:space-y-0 md:flex-row md:gap-x-2 items-end md:items-start md:justify-end">
          <Link
            to="/"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            to="/privacy"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            onClick={handleClick}
          >
            Privacy
          </Link>
          <Link
            to="/reviews"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            onClick={handleClick}
          >
            Reviews
          </Link>

          <Link
            to="/accessibility"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            onClick={handleClick}
          >
            Accessibility
          </Link>
          <Link
            to="/affiliate"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
            onClick={handleClick}
          >
            Affiliate Program
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
