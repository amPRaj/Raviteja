import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiSun, BiMoon } from "react-icons/bi";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 50 && currentScrollPos > prevScrollPos) {
        // Hide navbar when scrolling down
        setIsNavbarVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsNavbarVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header
      className={`${
        isNavbarVisible ? "block" : "hidden"
      } bg-white dark:bg-gray-900 text-blue-950 dark:text-white shadow-lg fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-extrabold text-blue-950 dark:text-white">
          <strong>RAVITEJA TEXTILES</strong>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-right ml-auto">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
          <a href="#contact" className="hover:text-yellow-400">
              About Us
            </a>
          </li>
          <li>
          <a href="#branches" className="hover:text-yellow-400">
              Gallery
            </a>
           
          </li>
        </ul>

        {/* Theme Toggler and Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* {theme === "light" ? (
            <BiMoon
              onClick={() => setTheme("dark")}
              size={24}
              className="cursor-pointer"
              aria-label="Switch to dark mode"
            />
          ) : (
            <BiSun
              onClick={() => setTheme("light")}
              size={24}
              className="cursor-pointer"
              aria-label="Switch to light mode"
            />
          )} */}

          {showMenu ? (
            <HiMenuAlt1
              onClick={() => setShowMenu(!showMenu)}
              size={30}
              className="md:hidden cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <HiMenuAlt3
              onClick={() => setShowMenu(!showMenu)}
              size={30}
              className="md:hidden cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-400 text-blue-950 dark:text-white"
                onClick={() => setShowMenu(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#branches"
                className="hover:text-yellow-400 text-blue-950 dark:text-white"
                onClick={() => setShowMenu(false)}
              >
                Branches
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 text-blue-950 dark:text-white"
                onClick={() => setShowMenu(false)}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar2;