import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "https://waynix-server.vercel.app/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("waynix_access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default $api;

