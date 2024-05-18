import React, { useState } from 'react';
import axios from 'axios';

const ActorSearch = () => {
    const [actorName, setActorName] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const handleSearch = async () => {
        console.log("Actor name:", actorName); // Verify the actor name
        setLoading(true);
        setError(null);
        await fetchActorMovies(actorName);
        setLoading(false);
    };

    console.log("Movies state:", movies); // Log movies state to check its value

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-4">Search for an Actor</h1>
            <input
                type="text"
                value={actorName}
                onChange={(e) => setActorName(e.target.value)}
                placeholder="Enter actor name"
                className="p-2 border border-gray-300 rounded mb-4"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded mb-4"
                disabled={loading}
            >
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-wrap justify-center gap-4">
                {movies.length === 0 && !loading && !error && (
                    <p className="text-gray-500">No movies found. Please enter a valid actor name.</p>
                )}
                {movies.map((movie) => {
                    console.log("Movie data:", movie); // Verifică datele fiecărui film
                    return (
                        <div key={movie.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white">
                            <img className="w-full" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{movie.title}</div>
                                <p className="text-gray-700 text-base">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="block mb-2"><strong>Release Date:</strong> {movie.release_date}</span>
                                <span className="block mb-2"><strong>Popularity:</strong> {movie.popularity}</span>
                                <span className="block"><strong>Vote Average:</strong> {movie.vote_average}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActorSearch;
