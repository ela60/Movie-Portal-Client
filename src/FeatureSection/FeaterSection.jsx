import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaterSection = ({ theme, toggleTheme }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://orchid-server-side.vercel.app/movie");
      const data = await response.json();

      const sortedMovies = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
      setMovies(sortedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <section
      className={`featured-movies py-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-base-200 text-base-content"
      }`}
    >
      <div className="container mx-auto text-center">
       
        <div className="flex justify-end mb-4">
         
        </div>

        <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`movie-card p-4 ${
                theme === "dark"
                  ? "bg-gray-800 text-white shadow-xl"
                  : "bg-white text-black shadow-lg"
              } rounded-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <img
                src={movie.moviePoster}
                alt={movie.movieTitle}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{movie.movieTitle}</h3>
              <p className="mb-2 ">
                Genre: {movie.genre}
              </p>
              <p className="mb-2">Duration: {movie.duration} mins</p>
              <p className="mb-2">Release Year: {movie.releaseYear}</p>
              <p className="text-yellow-500 mb-4">Rating: {movie.rating} ★</p>
              <Link
                to={`/movies/${movie._id}`}
                className={`btn ${
                  theme === "dark" ? "btn-accent" : "btn-primary"
                } w-full mt-4`}
              >
                See Details
              </Link>
            </div>
          ))}
        </div>

       
        <Link
          to="/allmovies"
          className={`btn ${
            theme === "dark" ? "btn-light" : "btn-secondary"
          } mt-8`}
        >
          See All Movies
        </Link>
      </div>
    </section>
  );
};

export default FeaterSection;
