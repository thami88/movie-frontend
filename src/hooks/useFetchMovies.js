import React, {useEffect, useState} from 'react';
import {fetchMovies} from "../api/movieApi";

const UseFetchMovies = () => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);
    return { movies, loading, error };
};

export default UseFetchMovies;