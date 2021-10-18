import axios from "axios";

export const api = axios.create({
    baseURL: "http://960c-2804-30c-b64-cc00-a521-ece2-8948-da44.ngrok.io/api"
});