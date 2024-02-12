import axios from "axios";

const apiBaseUrl =  `https://items-dn8q.onrender.com`
 
 
// `http://localhost:7000`

 

const api = axios.create({
    baseURL:apiBaseUrl,
});

export default api;