import { io } from "socket.io-client";

export const socket = io("http://5d96-2804-30c-b64-cc00-a521-ece2-8948-da44.ngrok.io", { autoConnect: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});