import axios from "axios";

const API_URL = "http://https://waynix-server.vercel.app/api";

const $api = axios.create({
  withCredentials: true, // important for cookies
  baseURL: API_URL,
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      return $api(originalRequest);
    }
    throw error;
  }
);

export default $api;
