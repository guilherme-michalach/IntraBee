import { io } from "socket.io-client";

export const socket = io("http://2694-177-200-213-98.ngrok.io", { autoConnect: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});