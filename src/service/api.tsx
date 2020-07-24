import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: "Basic YWxnYXdvcmtzOnMzbmg0",
  },
});

export default api;
