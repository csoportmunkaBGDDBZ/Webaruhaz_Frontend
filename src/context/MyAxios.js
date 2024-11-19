// saját axios példáy hogy tudjuk konfigurálni
import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
