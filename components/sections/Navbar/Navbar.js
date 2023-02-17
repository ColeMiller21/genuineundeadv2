import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";
import ToggleSwitch from "./ToggleSwitch";
import NavigationMenu from "./NavigationMenu";
import GUIcon from "./GUIcon";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);
  return (
    <>
      <nav
        id="navbar"
        className="w-min-screen h-[50px] top-0 sticky bg-white dark:bg-black flex justify-between items-center relative above-all bg-opacity-10 backdrop-filter backdrop-blur-lg"
      >
        <div className="pl-[1.6rem] md:pl-[3.2rem]">
          <Link href="/">
            <div
              className={`z-101 ${
                currentTheme === "dark"
                  ? "w-[30px] h-[30px]"
                  : "w-[35px] h-[35px]"
              }`}
            >
              {currentTheme === "dark" ? (
                <img src="/images/GUicon.svg" className="cursor-pointer" />
              ) : (
                <img
                  src="/images/GUicon-light.svg"
                  className="cursor-pointer"
                />
              )}
            </div>
          </Link>
        </div>
        <div className="positionCenter">
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
        </div>
        <div
          className={`bg-black dark:bg-white transition-all duration-700 overflow-hidden above-all`}
          onClick={toggleMenu}
        >
          <MenuButton menuOpen={menuOpen} theme={currentTheme} />
        </div>
        <NavigationMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
