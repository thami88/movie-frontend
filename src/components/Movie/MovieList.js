import React from 'react';
import useFetchMovies from "../../hooks/useFetchMovies";
import MovieProfile from "./MovieProfile";

const MovieList = () => {
    const {movies, loading, error} = useFetchMovies();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Movie List</h1>
                {movies.map((movie)=>(
                    <MovieProfile key={movie.id} movie={movie} />
                ))}
        </div>
    );
};

export default MovieList;
