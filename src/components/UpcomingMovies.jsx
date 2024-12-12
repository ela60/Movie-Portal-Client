import React, { useEffect, useState } from "react";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch upcoming movies data (from a public JSON or API)
    fetch("/upcomingMovies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching upcoming movies:", error));
  }, []);

  return (
    <div className="upcoming-movies py-10 bg-gray-900">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        🎬 Upcoming Movies
      </h2>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center scrolling-wrapper overflow-x-scroll space-x-6 py-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-poster relative group rounded-lg overflow-hidden"
          >
            {/* Movie Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 h-96 object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Favorite Icon */}
            <div className="absolute top-2 left-2 bg-gray-800/70 text-white rounded-full p-2 cursor-pointer hover:bg-red-500 transition-all">
              <i className="fas fa-heart"></i> {/* Font Awesome Favorite Icon */}
            </div>

            {/* Download Icon */}
            <div className="absolute top-2 right-2 bg-gray-800/70 text-white rounded-full p-2 cursor-pointer hover:bg-blue-500 transition-all">
              <i className="fas fa-download"></i> {/* Font Awesome Download Icon */}
            </div>

            {/* Movie Details */}
            <div className="movie-details absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm">{movie.releaseYear}</p>
              <p className="mt-2">{movie.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
