import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="overflow-x-hidden bg-[#f8f8f4] text-[#191917] dark:bg-black dark:text-[#f8f8f4]  mt-[-50px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
