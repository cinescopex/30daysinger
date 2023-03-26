import React from "react";
import LogoH from "./LogoH";

const Footer = () => {
  return (
    <footer className="text-sky-900 dark:text-white bg-white dark:bg-gray-800 p-4">
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
          <a
            href="/"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
          >
            Home
          </a>
          <a
            href="privacy"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
          >
            Privacy
          </a>
          <a
            href="/reviews"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
          >
            Reviews
          </a>

          <a
            href="accessibility"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
          >
            Accessibility
          </a>
          <a
            href="affiliate"
            className="hover:underline hover:text-sky-500 hover:cursor-pointer"
          >
            Affiliate Program
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
