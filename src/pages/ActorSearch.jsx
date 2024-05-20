// src/components/ActorSearch.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios'; // Importă biblioteca axios pentru a efectua cereri HTTP
import MovieByActor from '../layout/MovieByActor';

const API_KEY = '62ffac58c57333a136053150eaa1b587';

const ActorSearch = () => {
    const [actorName, setActorName] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { currentUser } = useContext(AuthContext);

    // Funcția pentru a căuta filmele după un actor folosind API-ul
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

            setMovies(response.data || []);
        } catch (error) {
            setError('Failed to fetch movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Funcție pentru gestionarea căutării
    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        await fetchActorMovies(actorName);
        setLoading(false);
    };

    // Returnează JSX-ul pentru a afișa formularul de căutare și rezultatele căutării
    return (
        <div className="flex flex-col items-center min-h-screen pt-10">
            <form className="flex justify-center p-2 pad-50" onSubmit={handleSearch}>
                <input
                    type="search"
                    className="w-600 h-8 p-1 m-2 border-b-2 border-gray-300 outline-none rounded-full placeholder-gray-500 focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300"
                    placeholder="Enter actor name..."
                    value={actorName}
                    onChange={(e) => setActorName(e.target.value)}
                />
                <button className="btn-danger-bordered rounded-full" type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <MovieByActor movies={movies} loading={loading} currentUser={currentUser} />
        </div>
    );
};

export default ActorSearch;
