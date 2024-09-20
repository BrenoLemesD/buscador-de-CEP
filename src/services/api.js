import axios from "axios";

const api = axios.create({
    baseURL: "https://viacel.com.br/ws/"
});

export default api;