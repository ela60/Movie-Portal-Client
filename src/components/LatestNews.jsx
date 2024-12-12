import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2 font-poppins border">
      {/* Latest Tag */}
      <p className="bg-[#D72050] text-base-200 px-3 py-1">Latest</p>

      {/* Scrolling Marquee */}
      <Marquee pauseOnHover={true} speed={60} className="space-x-10">
        <Link to="/movies" className="text-base-content hover:text-[#D72050] transition-colors duration-300">
          🎥 Your ultimate destination for exploring, adding, and managing your favorite movies. 🌟 Dive into the magic of cinema with a seamless experience!
        </Link>
        <Link to="/movies" className="text-base-content hover:text-[#D72050] transition-colors duration-300">
          🎥 Your ultimate destination for exploring, adding, and managing your favorite movies. 🌟 Dive into the magic of cinema with a seamless experience!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
