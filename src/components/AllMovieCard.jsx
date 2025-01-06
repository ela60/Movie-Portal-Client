import React from "react";
import { Link } from "react-router-dom";

const AllMovieCard = ({ movie }) => {
  const { moviePoster, movieTitle, genre, duration, releaseYear, rating, _id } = movie;

  return (
    <div className="card bg-base-300 shadow-md">
   
      <img src={moviePoster} alt={movieTitle} className="w-full h-48 object-cover" />

      {/* Movie Information */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{movieTitle}</h2>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Duration:</strong> {duration} mins</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Rating:</strong> {rating}/5</p>

        
        <div className="mt-4">
          <Link to={`/movies/${_id}`} className="btn bg-yellow-500 btn-sm">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMovieCard;
