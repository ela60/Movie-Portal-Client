import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FavoriteMovies = () => {
  const { user } = useContext(AuthContext); 
  const [favorites, setFavorites] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://orchid-server-side.vercel.app/favorites?email=${user?.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch favorites");
        }
        const data = await response.json();
        setFavorites(data || []); 
      } catch (err) {
        console.error("Error fetching favorites:", err);
        setError("Failed to load favorites");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchFavorites();
    }
  }, [user]);

  // Delete a movie from favorites
  const handleDeleteFavorite = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This movie will be removed from your favorites.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`https://orchid-server-side.vercel.app/favorites/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          Swal.fire("Deleted!", "The movie has been removed from your favorites.", "success");
          setFavorites((prev) => prev.filter((fav) => fav._id !== id)); 
        } else {
          throw new Error("Failed to delete favorite");
        }
      } catch (error) {
        console.error("Error deleting favorite:", error);
        Swal.fire("Error", "Failed to delete favorite. Please try again.", "error");
      }
    }
  };

  if (loading) return <div className="text-center mt-4"><span className="loading loading-bars loading-lg"></span></div>;
  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;

  return (
      <div>
          <Navbar/>
          <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map(({ _id, movie }) => (
            movie ? (
              <div key={_id} className="card shadow p-4 bg-white rounded">
                <img
                  src={movie.moviePoster}
                  alt={movie.movieTitle || "Movie Poster"}
                  className="h-40 w-full object-cover rounded"
                />
                <h2 className="text-lg font-bold mt-2">{movie.movieTitle}</h2>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Duration:</strong> {movie.duration}</p>
                <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <button
                  className="btn btn-secondary mt-2"
                  onClick={() => handleDeleteFavorite(_id)}
                >
                  Delete Favorite
                </button>
              </div>
            ) : (
              <div key={_id} className="card shadow p-4 bg-red-50 rounded">
                <p className="text-red-500">Error: Movie data is unavailable.</p>
              </div>
            )
          ))}
        </div>
      )}
          </div>
          <Footer/>
    </div>
  );
};

export default FavoriteMovies;
