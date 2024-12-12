import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
      <header className="relative bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white py-6 shadow-lg overflow-hidden">
       
        <div className="absolute inset-0 z-0">
          <div className="star-bg">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="star w-1 h-1 bg-white rounded-full opacity-50 absolute animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${1.5 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        
        <div className="absolute top-4 right-4 z-10">
         
        </div>

     
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            🎥 Movie Portal
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-poppins">
            🎬 Where Every Frame Tells a Story! 🌟
          </p>
        </div>

      
        <div className="relative mt-8 z-10 flex flex-col md:flex-row justify-center gap-6">
          <Link to='/aboutus' className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all">
            Discover Now
          </Link>
          <Link to='/view' className="px-6 py-3 bg-blue-400 text-black font-semibold rounded-full shadow-lg hover:bg-blue-500 transition-all">
            View Favorites
          </Link>
        </div>

        
        <div className="relative mt-10">
          <svg
            className="absolute bottom-0 left-0 w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,186.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Header;
