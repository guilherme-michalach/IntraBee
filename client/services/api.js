import axios from "axios";

export const api = axios.create({
    baseURL: "http://5195-177-200-213-98.ngrok.io/api"
});