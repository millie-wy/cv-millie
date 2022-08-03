import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cv-millie-server.herokuapp.com/api/",
});
