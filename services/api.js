// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactbackend-snff.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;