import axios from "axios";

const apiBaseUrl = `https://itemsserver.onrender.com`

// `http://localhost:7000`
const api = axios.create({
    baseURL:apiBaseUrl,
});

export default api;