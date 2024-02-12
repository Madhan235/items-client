import axios from "axios";

const apiBaseUrl =  `https://items-dn8q.onrender.com`


// `http://localhost:7000`

// `https://items-dn8q.onrender.com`

const api = axios.create({
    baseURL:apiBaseUrl,
});

export default api;