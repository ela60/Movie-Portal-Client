import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthProvider";

const AddMoviePage = () => {
  const [rating, setRating] = useState(0);
   
 
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "No user logged in";

  const handleAddMovie = (e) => {
    e.preventDefault();

    const moviePoster = e.target.moviePoster.value;
    const movieTitle = e.target.movieTitle.value;
     const genre = Array.from(e.target.genre.selectedOptions).map(option => option.value);

    const duration = e.target.duration.value;
    const releaseYear = e.target.releaseYear.value;
      const summary = e.target.summary.value;
      
    //   const newMovieAdd = { moviePoster, movieTitle, genre, duration, releaseYear, summary };
    //   console.log(newMovieAdd);

    // Validation
    if (!moviePoster.startsWith("http")) {
      toast.error("Movie Poster must be a valid URL");
      return;
    }

    if (movieTitle.length < 2) {
      toast.error("Movie Title must have at least 2 characters");
      return;
    }

    if (!duration || duration < 60) {
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

    // Add Movie Data
    const newMovie = {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email: userEmail, 
    };

    console.log(newMovie);

    // Send data to the server
    fetch("https://orchid-server-side.vercel.app/movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

          e.target.reset();
          setRating(0); 

          
          window.location.href = "/allmovies";
        }
      })
      .catch((err) => {
        toast.error("Failed to add movie. Please try again.");
        console.error(err);
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="lg:w-3/4 mx-auto ">
      <ToastContainer />
      <div className="text-center p-2 mb-12">
      <h1
          className="text-4xl font-bold text-yellow-500 text-center mb-8 py-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://img.freepik.com/free-photo/movie-background-collage_23-2149876013.jpg")',
          }}
        >
           Add Movies
        </h1>
          <p className="text-center text-blue-400">
        Logged in as: <span className="font-medium text-blue-400">{userEmail}</span>
      </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddMovie} className="card-body">
          {/* Movie Poster */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Poster</span>
            </label>
            <input
              type="text"
              name="moviePoster"
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
            <select name="genre" className="select select-bordered" required>
              <option value="">Select Genre</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="thriller">Thriller</option>
              <option value="thriller">Romantic</option>
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
              className="select select-bordered"
              required
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2021">2020</option>
              <option value="2021">2019</option>
              <option value="2021">2018</option>
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
              placeholder="Enter a short summary"
              className="textarea textarea-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Movie</button>
          </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AddMoviePage;
