import React, { useState } from 'react';

function Card({ movie, type }) {
    const [overview, setOverview] = useState(true);
    const [cast, setCast] = useState(false);

    return (
        <div className="movie-wrapper">
            <div className="title-wrapper">
                <div>
                    <div className="title">{movie?.title}</div>
                    <div className="info-wrapper">
                        <div className="year">{movie?.releaseYear}</div>
                        {movie?.runtime && (
                            <div className="runtime">
                                {(movie?.runtime - (movie?.runtime % 60)) / 60}h{" "}
                                {movie?.runtime % 60}m
                            </div>
                        )}
                    </div>
                </div>
                {/* Poster nu este furnizat în răspunsul API */}
            </div>
            <div className="routes">
                <div
                    onClick={() => {
                        setOverview(true);
                        setCast(false);
                    }}
                >
                    Overview
                </div>
                <div
                    onClick={() => {
                        setOverview(false);
                        setCast(true);
                    }}
                >
                    Cast
                </div>
            </div>
            {overview && (
                <div>
                    <div className="title">About</div>
                    <div className="rating-wrapper">
                        <div className="rating">
                            {movie?.vote_average} / 10
                            <div>Rating</div>
                        </div>
                        <div className="line"></div>
                        <div className="rating">
                            {movie?.popularity}
                            <div>Popularity</div>
                        </div>
                    </div>
                    <div className="tagline">{movie?.tagline}</div>
                    <div className="overview">{movie?.overview}</div>
                </div>
            )}
            {cast && (
                <div className="link-wrapper">
                    <div className="cast-details">
                        <div className="cast-item">
                            <div className="cast-label">Status:</div>
                            <div className="cast-value">{movie?.status}</div>
                        </div>
                        <div className="cast-item">
                            <div className="cast-label">Revenue:</div>
                            <div className="cast-value">{movie?.revenue}</div>
                        </div>
                        <div className="cast-item">
                            <div className="cast-label">Budget:</div>
                            <div className="cast-value">{movie?.budget}</div>
                        </div>
                        <div className="cast-item">
                            <div className="cast-label">Original Language:</div>
                            <div className="cast-value">{movie?.original_language}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;