import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(async (response) => {
  return response;
});
