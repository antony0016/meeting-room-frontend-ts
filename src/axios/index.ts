import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error.response);
    return error;
  }
);

export const axiosInstance = instance;
