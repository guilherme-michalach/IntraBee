import axios from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:4041:3001/api"
});