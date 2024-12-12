import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/movie-7328179_640.webp";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="hidden sm:block text-lg font-bold font-poppins tracking-wider hover:text-yellow-500 transition duration-300">
            Movie Portal
          </span>
        </Link>

       
        <div className="hidden lg:flex items-center space-x-6 text-base font-medium">
          <Link
            to="/"
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/allmovies"
            className="hover:text-yellow-500 transition duration-300"
          >
            All Movies
          </Link>
          {user ? (
            <>
              <Link
                to="/addMovie"
                className="hover:text-yellow-500 transition duration-300"
              >
                Add Movie
              </Link>
              <Link
                to="/favorites"
                className="hover:text-yellow-500 transition duration-300"
              >
                My Favorites
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="hover:text-yellow-500 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="hover:text-yellow-500 transition duration-300"
              >
                Register
              </Link>
            </>
          )}
          <Link
            to="/aboutus"
            className="hover:text-yellow-500 transition duration-300"
          >
            About Us
          </Link>
        </div>

       
        <div className="flex items-center gap-4">
          
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="hidden"
            />
            <div className="bg-gray-600 w-12 h-6 rounded-full flex items-center px-1">
              <div
                className={`h-4 w-4 rounded-full transform transition ${
                  theme === "dark" ? "translate-x-6 bg-yellow-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>

          {user ? (
            <>
              {user.photoURL && (
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User"
                    className="w-10 h-10 rounded-full shadow-lg cursor-pointer"
                  />
                  {user.displayName && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {user.displayName}
                    </div>
                  )}
                </div>
              )}
              <button
                onClick={logOut}
                className="bg-yellow-500 text-black text-nowrap font-semibold text-[9px] md:text-[16px] p-1 md:px-4 md:py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Log-Out
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="bg-yellow-500 text-black font-semibold text-[12px] md:text-[16px] px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-yellow-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-3 p-4 bg-gray-800 text-white shadow-lg z-50">
          <Link
            to="/"
            className="hover:text-yellow-500 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/allmovies"
            className="hover:text-yellow-500 transition duration-300"
            onClick={toggleMenu}
          >
            All Movies
          </Link>
          {user ? (
            <>
              <Link
                to="/addMovie"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                Add Movie
              </Link>
              <Link
                to="/favorites"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                My Favorites
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </>
          )}
          <Link
            to="/aboutus"
            className="hover:text-yellow-500 transition duration-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
