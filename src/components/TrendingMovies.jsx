import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Fade, Slide  } from "react-awesome-reveal";

const TrendingMovies = ({ theme }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/TrendingMovies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching trending movies:", error));
  }, []);

  return (
    <div
      className={`trending-movies py-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-base-100 text-base-content"
      }`}
    >
      <Fade cascade damping={1}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          🔥 Trending Movies
        </h2>
        <Slide direction="right" cascade damping={1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <MovieCard movie={movie} theme={theme} />
            </div>
          ))}
          </div>
          </Slide>
      </Fade>
    </div>
  );
};

export default TrendingMovies;
