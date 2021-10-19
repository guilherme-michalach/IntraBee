require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const http = require("http");
const socket = require("socket.io");
const app = express();

const PORT = process.env.PORT || 5001;

const { ExpressPeerServer } = require("peer");

const server = http.createServer(app);

const io = socket(server).sockets;

const customGenerationFunction = () => (Math.random().toString(36) + "0000000000000000").substr(2, 16);

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: "/",
    generateClientId: customGenerationFunction
});

// Definição de middlewares

app.use(express.json())

app.use("/mypeer", peerServer);

io.on("connection", function(socket) {
    socket.on("join-room", ({roomID, userId}) => {
        socket.join(roomID)
        socket.to(roomID).broadcast.emit("user-connected", userId)
    })
});

// Definição do middleware de tratamento de erros

app.use(require("./middlewares/errorMiddleware"));

server.listen(PORT, () => console.log("Server running on port: " + PORT));