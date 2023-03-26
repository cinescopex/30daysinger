import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-red-300">
      <Navbar />
      <main className="bg-gray-100 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
