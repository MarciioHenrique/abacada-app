import axios from "axios";

//cria a base da api que será utilizada
const api = axios.create({
    baseURL: "http://localhost:8080",
    headers:
        {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    body:
        {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }

);

export default api;