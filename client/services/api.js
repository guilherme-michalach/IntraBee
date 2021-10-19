import axios from "axios";

export const api = axios.create({
    baseURL: "http://9b5b-2804-30c-b64-cc00-8d0e-6e10-76b6-5926.ngrok.io/api"
});