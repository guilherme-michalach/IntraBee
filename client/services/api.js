import axios from "axios";

export const api = axios.create({
    baseURL: "http://1e1a-177-200-213-98.ngrok.io/api"
});