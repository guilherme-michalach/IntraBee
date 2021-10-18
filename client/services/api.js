import axios from "axios";

export const api = axios.create({
    baseURL: "http://3ef7-2804-30c-b64-cc00-a8da-eed7-af37-2f7f.ngrok.io/api"
});