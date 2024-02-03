import axios from "axios";

export const authApi = axios.create({
  baseURL:
    "http://localhost:5000/api/v1/auth/",
});
