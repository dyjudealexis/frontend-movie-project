// src/utils/axios.js

import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use your backend API URL here
  withCredentials: true, // Ensure cookies (if any) are sent with the request
  headers: {
    'Content-Type': 'application/json',
    'XSRF-TOKEN': 'true', // Or dynamically set the XSRF token from a cookie or meta tag if needed
  },
});

// Optionally, intercept requests or responses if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // You can dynamically set or adjust headers before the request is sent, if needed
    // For example, you could add a token from localStorage or cookies if it's available
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
