import axios from "axios";

const apiBaseUrl = `http://localhost:7000`


// `https://itemsserver.onrender.com`

const api = axios.create({
    baseURL:apiBaseUrl,
});

export default api;