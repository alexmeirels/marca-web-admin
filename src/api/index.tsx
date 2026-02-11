import axios from "axios";

const isLocal = true;

export const api = axios.create({
  baseURL: isLocal
    ? import.meta.env.VITE_LOCAL_API_URL
    : import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export const publicApi = axios.create({
  baseURL: isLocal
    ? import.meta.env.VITE_LOCAL_API_URL
    : import.meta.env.VITE_API_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${storedToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Não autorizado, redirecionar login");
    return Promise.reject(error);
  },
);

export default api;
