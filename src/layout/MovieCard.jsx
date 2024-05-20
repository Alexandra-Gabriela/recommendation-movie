import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };  
  const recommendMovie = (vote_average) => {
    if (vote_average >= 8) {
      return "Watch this movie now!";
    } else if (vote_average <= 5) {
      return "Avoid this movie at all costs!";
    } else {
      return null;
    }
  };




  return (
    <div
      className="movie"
      id="container"
      onClick={() => navigate("/details/" + id)}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
        />
    <div className="flex items-center justify-between text-left p-1 text-white">
      <h5>{title}</h5>
      {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
              {vote_average.toFixed(1)}
          </span>
      )}
  </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto p-4">
        <h2>Overview</h2>
        <p>{overview}</p>
        {recommendMovie(vote_average) && (
          <p className="text-red-500 p-2 font-bold bg-gray-700 pulse flex items-center justify-center">{recommendMovie(vote_average)}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
