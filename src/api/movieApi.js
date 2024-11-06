import axiosInstance from "./axiosInstance";

export const fetchMovies = async () => {
    const response = await axiosInstance.get('/movies')
    return response.data;
    // try {
    //     const response = await axiosInstance.get('/movies')
    //     return response.data;
    // } catch (error) {
    //     console.error('Error fetching movies:', error);
    //     throw error;
    // }
};