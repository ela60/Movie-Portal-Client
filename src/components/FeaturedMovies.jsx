import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllMovieCard from "./AllMovieCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FeaturedMovies = () => {
  const movies = useLoaderData(); // All movies from the loader
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-center mb-8">All Added Movies</h1>

       {/* Search Bar */}
<div className="mb-8 relative w-full">
  <input
    type="text"
    placeholder="Search by Movie Title"
    className="w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring focus:border-yellow-500 pr-12"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16l-4-4m0 0l4-4m-4 4h16"
      />
    </svg>
  </span>
</div>

        {/* Movie Cards */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie) => (
              <AllMovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No movies found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FeaturedMovies;
