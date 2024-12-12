import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LatestMovies = ({ movies = [] }) => {
  return (
      <div>
          <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-12 mt-1">
        {/* Background Image */}
        <div
          className="absolute inset-0 object-contain  bg-center opacity-70"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/9GtfxHn/B71-M-Id-399456-Chennai-Express.jpg')`,
          }}
        ></div>

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center space-y-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-md">
            Discover the Latest Movies
          </h1>
          {/* Subtitle */}
          
          {/* CTA Button */}
          <Link to="/"
            href="#latest-movies"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 shadow-lg transition duration-300"
          >
            Explore Now
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500 opacity-20 rounded-full animate-pulse"></div>
      </section>

      {/* Latest Movies Section */}
      <section
        id="latest-movies"
        className="py-12 bg-gray-100 text-gray-900 relative"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Latest Blockbusters
                  </h2>
                 

        

          {/* See All Movies Button */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 shadow-lg transition duration-300"
            >
              See All Movies
            </Link>
          </div>
        </div>
          </section>
          <Footer/>
    </div>
  );
};

export default LatestMovies;
