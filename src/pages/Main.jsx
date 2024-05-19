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
          className="w-600 h-8 p-1 m-2 border-b-2 border-gray-300 outline-none rounded-full placeholder-gray-500 focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300 mt-4"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered rounded-full" type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      <div className="flex justify-center flex-wrap">
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
