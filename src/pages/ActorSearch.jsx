import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ActorSearch = () => {
    const [actorName, setActorName] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { currentUser } = useContext(AuthContext);

    const API_KEY = '62ffac58c57333a136053150eaa1b587';

    const fetchActorMovies = async (actorName) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://actor-movie-api1.p.rapidapi.com/getid/${actorName}`, {
                params: { apiKey: API_KEY },
                headers: {
                    'X-RapidAPI-Key': 'c8a8e2ce2amsh8be6791c137a71cp16c4d4jsnafb4580475dc',
                    'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com',
                },
            });

            console.log("Response data:", response.data); // Log data to check the response
            setMovies(response.data || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setError('Failed to fetch movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        console.log("Actor name:", actorName); // Verify the actor name
        setLoading(true);
        setError(null);
        await fetchActorMovies(actorName);
        setLoading(false);
    };

    const getVoteClass = (vote) => {
        if (vote >= 8) {
            return "text-green-500";
        } else if (vote >= 6) {
            return "text-orange-500";
        } else {
            return "text-red-500";
        }
    };

    console.log("Movies state:", movies); // Log movies state to check its value

    return (
        <div className="flex flex-col items-center min-h-screen pt-10">
            <form className="flex justify-center p-2 pad-50" onSubmit={handleSearch}>
                <input
                    type="search"
                    className="w-600 h-8 p-1 m-2"
                    placeholder="Search an actor..."
                    value={actorName}
                    onChange={(e) => setActorName(e.target.value)}
                />
                <button className="btn-danger-bordered rounded-full" type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {movies.length === 0 && !loading && !error}
                {movies.map((movie) => {
                    console.log("Movie data:", movie); // Verify movie data
                    return (
                        <div key={movie.id} className="relative max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full h-96 object-cover" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-lg font-bold text-gray-800">{movie.title}</h5>
                                    {currentUser && (
                                        <span className={`text-sm ${getVoteClass(movie.vote_average)}`}>
                                            {movie.vote_average.toFixed(1)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto p-4">
                                <div className="text-center">
                                    <p className="text-base">
                                        {movie.overview}
                                    </p>
                                    <div className="pt-4">
                                        <span className="block mb-2"><strong>Release Date:</strong> {movie.release_date}</span>
                                        <span className="block mb-2"><strong>Popularity:</strong> {movie.popularity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActorSearch;
