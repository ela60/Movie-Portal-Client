import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"; // If using route loader
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const UpdateMoviePage = () => {
  const movie = useLoaderData(); 
  const [rating, setRating] = useState(movie?.rating || 0);

  
  useEffect(() => {
    if (movie) {
      setRating(movie.rating || 0);
    }
  }, [movie]);

  const handleUpdateMovie = (e) => {
    e.preventDefault();

    const moviePoster = e.target.moviePoster.value;
    const movieTitle = e.target.movieTitle.value;
    const genre = e.target.genre.value;
    const duration = Number(e.target.duration.value);
    const releaseYear = e.target.releaseYear.value;
    const summary = e.target.summary.value;

    // Validation
    if (!moviePoster.startsWith("http")) {
      toast.error("Movie Poster must be a valid URL");
      return;
    }
    if (movieTitle.length < 2) {
      toast.error("Movie Title must have at least 2 characters");
      return;
    }
    if (duration < 60) {
      toast.error("Duration must be greater than 60 minutes");
      return;
    }
    if (!releaseYear) {
      toast.error("Please select a release year");
      return;
    }
    if (rating === 0) {
      toast.error("Please provide a rating");
      return;
    }
    if (summary.length < 10) {
      toast.error("Summary must have at least 10 characters");
      return;
    }

    const updatedMovie = {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      };
      console.log(updatedMovie);

    fetch(`https://orchid-server-side.vercel.app/movie/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
          setRating(0);
          window.location.href = `/movies/${movie._id}`;
        } else {
          toast.error("Failed to update movie. Please try again.");
        }
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again.");
        console.error(err);
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="lg:w-3/4 mx-auto">
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Update Movie</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateMovie} className="card-body">
            {/* Movie Poster */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="moviePoster"
                defaultValue={movie?.moviePoster || ""}
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>

            {/* Movie Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="movieTitle"
                defaultValue={movie?.movieTitle || ""}
                placeholder="Enter movie title"
                className="input input-bordered"
                required
              />
            </div>

            {/* Genre Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                name="genre"
                defaultValue={movie?.genre || ""}
                className="select select-bordered"
                required
              >
                <option value="">Select Genre</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="thriller">Thriller</option>
                <option value="romantic">Romantic</option>
              </select>
            </div>

            {/* Duration */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration (in minutes)</span>
              </label>
              <input
                type="number"
                name="duration"
                defaultValue={movie?.duration || ""}
                placeholder="Enter duration"
                className="input input-bordered"
                required
              />
            </div>

            {/* Release Year */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <select
                name="releaseYear"
                defaultValue={movie?.releaseYear || ""}
                className="select select-bordered"
                required
              >
                <option value="">Select Year</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option value={2024 - i} key={i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <Rating
                onClick={(rate) => setRating(rate)}
                ratingValue={rating}
                size={30}
              />
            </div>

            {/* Summary */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                name="summary"
                defaultValue={movie?.summary || ""}
                placeholder="Enter a short summary"
                className="textarea textarea-bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Movie</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateMoviePage;
