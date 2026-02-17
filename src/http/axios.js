import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8001/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      return $api(originalRequest);
    }
    throw error;
  }
);

export default $api;
