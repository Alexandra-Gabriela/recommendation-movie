
import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieByActor = ({ movies, loading, currentUser }) => {
    const getVoteClass = (vote) => {
        if (vote >= 8) {
            return "text-green-500";
        } else if (vote >= 5) {
            return "text-orange-500";
        } else {
            return "text-red-500";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {loading && (
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {!loading && movies.length === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-gray-500 text-center">No movies found. Please enter a valid actor name.</p>
        </div>
            )}
            {!loading && movies.map((movie) => {
                const recommendation = recommendMovie(movie.vote_average);
                return (
                    <div key={movie.id} className="relative max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full h-96 object-cover" src={movie.poster_path ? IMG_API + movie.poster_path : defaultImage} alt={movie.title} />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h5 className="text-lg font-bold text-gray-800">{movie.title}</h5>
                                {currentUser && (
                                    <span className={`text-sm ${getVoteClass(movie.vote_average)}`}>
                                        {movie.vote_average.toFixed(1)}
                                    </span>
        
                                )}
                            </div>
                            {recommendation && (
                                <p className="text-red-700 p-2 font-bold mt-2 pulse flex items-center justify-center">
                                    {recommendation}
                                </p>
                            )}
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto p-4">
                            <div className="text-center">
                                <p className="text-base">{movie.overview}</p>
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
    );
};

export default MovieByActor;
