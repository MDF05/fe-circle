import axios from "axios";
import Cookie from "js-cookie";
const baseURL = import.meta.env.VITE_BACKEND_API;

export const apiV1 = axios.create({
  baseURL,
});

apiV1.interceptors.request.use((config) => {
  const token = Cookie.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
