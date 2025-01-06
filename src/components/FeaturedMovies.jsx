import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllMovieCard from "./AllMovieCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FeaturedMovies = () => {
  const movies = useLoaderData(); // All movies from the loader
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortOrder, setSortOrder] = useState("asc"); // State for sort order (ascending or descending)

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort movies based on the selected order (rating or release year)
  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOrder === "asc") {
      return (
        a.rating - b.rating || new Date(a.releaseYear) - new Date(b.releaseYear)
      );
    } else {
      return (
        b.rating - a.rating || new Date(b.releaseYear) - new Date(a.releaseYear)
      );
    }
  });

  // Toggle sort order function
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-8">
        <h1
          className="text-4xl font-bold text-yellow-500 text-center mb-8 py-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://img.pikbest.com/back_our/bg/20191111/bg/d8834ae6a649d.png!w700wp")',
          }}
        >
          All Added Movies
        </h1>

        {/* Search Bar */}
        <div className="mb-8 relative w-full">
          <input
            type="text"
            placeholder="Search by Movie Title"
            className=" md:  w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring focus:border-yellow-500 pr-12"
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

        {/* Sort Buttons */}
        <div className="mb-8 text-center">
          <button
            onClick={toggleSortOrder}
            className="md:absolute md:-mt-44 md:-ml-16 px-4 py-2 bg-yellow-500 text-blue-900 font-bold rounded-md focus:outline-none"
          >
            Sort by Rating {sortOrder === "asc" ? "↓" : "↑"}
          </button>
        </div>

        {/* Movie Cards */}
        {sortedMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedMovies.map((movie) => (
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
