import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import MovieCard from "../layout/MovieCard";

const API_KEY = '608f87f5e5fecfdaa32472be606d8755';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("please log in to search a movie");
      navigate("/login");
    } else {
      toastWarnNotify("please enter a text");
    }
  };
  return (
    <>
      <form className="flex justify-center p-2 pad-50" onSubmit={handleSubmit}>
      <input
          type="search"
          className="w-full md:w-96 h-12 px-4 rounded-full border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ml-4 px-8 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 mt-4">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap ">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
