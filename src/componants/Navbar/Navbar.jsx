import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose, IoMdSunny, IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import logo from "../Navbar/log2o.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default theme

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = theme;
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "All Product", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/profile" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   const role =useSelector((state) => state.auth.role);
  

  if (isLoggedIn === false) {

    links.splice(4);
  }

  if (isLoggedIn === true && role === "admin" )
  {
    links.splice(3,2);
  }
  if (isLoggedIn === true && role !== "admin" )
  {
    links.splice(5);
  }


  return (
    <div className={`bg-zinc-800  text-white ${theme}`}>
      <div className="flex items-center justify-between px-8 py-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className="h-10 mr-4 my-3" src={logo} alt="logo" />
          <h1 className="text-2xl font-semibold">Logo</h1>
        </motion.div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((ele, index) => (
            <Link
              className="hover:text-blue-500 transition-all duration-300"
              key={index}
              to={ele.link}
            >
              {ele.title}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          {isLoggedIn === false && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  to="/login"
                  className="px-4 py-2 border rounded border-blue-500 hover:bg-blue-500 transition-all duration-300"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  to="/signUp"
                  className="px-4 py-2 rounded bg-white text-zinc-800 hover:bg-zinc-100 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </motion.div>
            </>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
          >
            {theme === "dark" ? (
              <IoMdSunny size={24} />
            ) : (
              <IoMdMoon size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="md:hidden flex flex-col items-center gap-4 pb-4"
        >
          {links.map((ele, index) => (
            <Link
              className="hover:text-blue-500 transition-all duration-300"
              key={index}
              to={ele.link}
              onClick={() => setIsOpen(false)}
            >
              {ele.title}
            </Link>
          ))}

          {isLoggedIn === false && (
            <div className="flex flex-col gap-2 mt-4 w-full px-8">
              <Link
                to="/login"
                className="px-4 py-2 border rounded border-blue-500 hover:bg-blue-500 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signUp"
                className="px-4 py-2 rounded bg-white text-zinc-800 hover:bg-zinc-100 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
