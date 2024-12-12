import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908.jpg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <img src={notFoundImage} alt="404 Not Found" className="w-40 mb-6" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded text-lg font-semibold transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
