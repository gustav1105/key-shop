import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Your API base URL
  timeout: 10000, // Optional: set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers if needed
  },
});

export default axiosInstance;
