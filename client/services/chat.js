import { io } from "socket.io-client";

export const socket = io("http://192.168.1.2:8080", { autoConnect: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});