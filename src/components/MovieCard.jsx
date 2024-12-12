const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card border p-4 rounded-lg shadow-md">
      <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
      <p className="text-sm text-gray-600">Genre: {movie.genre.join(", ")}</p>
      <p className="text-sm text-gray-600">Duration: {movie.duration} min</p>
      <p className="text-sm text-gray-600">Release Year: {movie.releaseYear}</p>
      <p className="text-sm text-gray-600">Rating: {movie.rating}/10</p>
      <p className="text-sm text-gray-800 mt-2">{movie.summary}</p>
    </div>
  );
};

export default MovieCard;
