import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

const AddMoviePage = () => {
  const { user } = useAuth() || {};
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
    poster: "",
  });

  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  useEffect(() => {
    console.log("Updated Movie Data:", movieData);
  }, [movieData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (movieData.title.length < 2) {
      toast.error("Movie title must be at least 2 characters.");
      return;
    }
    if (!movieData.poster.startsWith("http")) {
      toast.error("Poster URL must be a valid URL.");
      return;
    }
    if (!movieData.genre) {
      toast.error("Please select a genre.");
      return;
    }
    if (!movieData.duration || movieData.duration <= 60) {
      toast.error("Duration must be greater than 60 minutes.");
      return;
    }
    if (!movieData.releaseYear) {
      toast.error("Please select a release year.");
      return;
    }
    if (!user) {
      toast.error("You must be logged in to add a movie.");
      return;
      }
      console.log("Submitted Movie Data:", {
        ...movieData,
        userEmail: user.email,
      });

    try {
      const response = await fetch("https://orchid-server-side.vercel.app/add-movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...movieData, userEmail: user.email }),
      });

      if (response.ok) {
        toast.success("Movie added successfully!");
        navigate("/allmovies");
      } else {
        throw new Error("Failed to add movie");
      }
    } catch (error) {
      toast.error("Error adding movie: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add Movie</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* Movie Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Movie Title</label>
            <input
              type="text"
              placeholder="Movie Title"
              value={movieData.title}
              onChange={(e) => {
                console.log("Title:", e.target.value);
                setMovieData({ ...movieData, title: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Genre Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <select
              value={movieData.genre}
              onChange={(e) => {
                console.log("Genre:", e.target.value);
                setMovieData({ ...movieData, genre: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Genre</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="romance">Romance</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>

          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Duration (in minutes)</label>
            <input
              type="number"
              placeholder="Duration"
              value={movieData.duration}
              onChange={(e) => {
                console.log("Duration:", e.target.value);
                setMovieData({ ...movieData, duration: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Release Year Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Release Year</label>
            <select
              value={movieData.releaseYear}
              onChange={(e) => {
                console.log("Release Year:", e.target.value);
                setMovieData({ ...movieData, releaseYear: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              placeholder="Rating"
              value={movieData.rating}
              onChange={(e) => {
                console.log("Rating:", e.target.value);
                setMovieData({ ...movieData, rating: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Summary */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Summary</label>
            <textarea
              placeholder="Movie Summary"
              value={movieData.summary}
              onChange={(e) => {
                console.log("Summary:", e.target.value);
                setMovieData({ ...movieData, summary: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Poster URL */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Poster URL</label>
            <input
              type="text"
              placeholder="Poster URL"
              value={movieData.poster}
              onChange={(e) => {
                console.log("Poster URL:", e.target.value);
                setMovieData({ ...movieData, poster: e.target.value });
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMoviePage;
