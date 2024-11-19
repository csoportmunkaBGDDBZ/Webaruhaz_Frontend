// saját axios példáy hogy tudjuk konfigurálni
import axios from "axios";

export const myAxios = axios.create({
  baseURL: "http://localhost:8000/api",
});
