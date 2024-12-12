import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const movie = useLoaderData() ;
  
  const navigate = useNavigate();

  

  const {user}=useContext(AuthContext)

  const { moviePoster, movieTitle, genre, duration, releaseYear, rating, summary, _id } = movie;
  console.log(movie);

  const handleDeleteMovie = async (_id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`https://orchid-server-side.vercel.app/movie/${_id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire("Deleted!", "The movie has been deleted.", "success");
          navigate("/allmovies");
        } else {
          throw new Error("Failed to delete the movie");
        }
      } catch (error) {
        console.error("Error deleting movie:", error);
        Swal.fire("Error", "Failed to delete the movie. Please try again.", "error");
      }
    }
  };

  const handleAddToFavorites = async () => {
    if (!user?.email) {
      Swal.fire("Error", "You must be logged in to add movies to favorites.", "error");
      return;
    }

    try {
      const response = await fetch(`https://orchid-server-side.vercel.app/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...movie,
          email: user.email, 
        }),
      });
     
      if (response.ok) {
        Swal.fire("Added!", "The movie has been added to your favorites.", "success");
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
      Swal.fire("Error", "Failed to add to favorites. Please try again.", "error");
    }
  };


  const handleUpdateMovie = () => {
    navigate(`/updateMovie/${_id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <div className="card w-full lg:w-3/4 xl:w-1/2 mx-auto shadow-lg p-4 sm:p-6 bg-white rounded-lg">
          <img
            src={moviePoster}
            alt={movieTitle}
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
            {movieTitle}
          </h1>
          <div className="text-sm sm:text-base space-y-2 text-gray-600">
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Duration:</strong> {duration}</p>
            <p><strong>Release Year:</strong> {releaseYear}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p className="mt-4"><strong>Summary:</strong> {summary}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <button
              onClick={() => handleDeleteMovie(_id)}
              className="btn btn-secondary w-full sm:w-auto px-6 py-2 rounded text-sm sm:text-base"
            >
              Delete Movie
            </button>
            <button
              onClick={handleAddToFavorites}

              className="btn btn-primary w-full sm:w-auto px-6 py-2 rounded text-sm sm:text-base"
            >
              Add to Favorite
            </button>
            <button
              onClick={handleUpdateMovie}
              className="btn btn-warning w-full sm:w-auto px-6 py-2 rounded text-sm sm:text-base"
            >
              Update Movie
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
