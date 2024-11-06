import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',  // URL of your Rails backend
    headers: {"Content-Type": "application/json"},
});
export default axiosInstance;