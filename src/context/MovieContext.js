import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();

const API_KEY = '608f87f5e5fecfdaa32472be606d8755';
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  // Starea pentru lista de filme și încărcare
  const [movies, setMovies] = useState([]); //array gol filme
  const [loading, setLoading] = useState(false); //pt a actualiza starea
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API) // Cerere GET către API
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); //loading-ul pe false ca sa nu caute
  };
  const values = { movies, getMovies, loading };
  return (
    //furnizeaza contextul
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
