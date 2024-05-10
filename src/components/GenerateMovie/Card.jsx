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
                        <div className="year">{movie?.year}</div>
                        {movie?.runtime && (
                            <div className="runtime">
                                {(movie?.runtime - (movie?.runtime % 60)) / 60}h{" "}
                                {movie?.runtime % 60}m
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="poster-header"
                    style={{ backgroundImage: `url(${movie?.posterURLs?.original})` }}
                ></div>
            </div>
            <div className="routes">
                <div
                    onClick={() => {
                        setOverview(true);
                        setCast(false);
                    }}
                >
                    overview
                </div>
                <div
                    onClick={() => {
                        setOverview(false);
                        setCast(true);
                    }}
                >
                    cast
                </div>
            </div>
            {overview && (
                <div>
                    <div className="title">About</div>
                    <div className="rating-wrapper">
                        {movie?.imdbRating && (
                            <div className="rating">
                                {movie?.imdbRating / 10} /10
                                <div>IMDB</div>
                            </div>
                        )}
                        <div className="line"></div>
                        {movie?.tmdbRating && (
                            <div className="rating">
                                {movie?.tmdbRating / 10} /10
                                <div>TMDB</div>
                            </div>
                        )}
                    </div>
                    {type === "series" && (
                        <div>
                            <div className="overview">
                                Number of seasons : {movie?.seasons}
                            </div>
                            <div className="overview">
                                Total episodes : {movie?.episodes}
                            </div>
                        </div>
                    )}
                    {movie?.tagline && <div className="tagline">{movie?.tagline}</div>}
                    <div className="overview">{movie?.overview}</div>
                </div>
            )}
            {cast && (
                <div className="link-wrapper">
                    {movie?.cast.map((name, index) => (
                        <div key={index}>
                            <div className="link">{name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Card;
