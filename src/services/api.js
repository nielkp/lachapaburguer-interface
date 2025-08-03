import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('lachapaburger:userData');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});
