import React from "react";
import logo from "../assets/movie-7328179_640.webp";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-center space-y-6 md:space-y-0 md:space-x-20 text-center md:text-left">
          {/* Logo and Website Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-20 h-20 mb-3">
              <img
                src={logo}
                alt="Logo"
                className="rounded-full shadow-lg object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold font-poppins tracking-wide">
              Movie Portal
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Discover the world of movies.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-lg">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition duration-300"
            >
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-sm text-gray-400">
              Have questions? Contact us:
            </p>
            <a
              href="https://mymovieverse.com/"
              className="text-blue-400 hover:underline"
            >
              info@movieverse.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <h4 className="text-blue-500 underline">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </h4>
          <p className="mt-2 text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-400">MovieVerse</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
