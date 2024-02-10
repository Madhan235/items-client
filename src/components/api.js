import axios from "axios";

const apiBaseUrl = `https://itemsserver.onrender.com/`

const api = axios.create({
    baseURL:apiBaseUrl,
});

export default api;