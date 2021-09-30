const { Server } = require("socket.io");

const io = new Server({ cors: { origin: "http://localhost:3000" } });

const messages = [];

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

    socket.on("send message", message => {
        socket.broadcast.emit("send message", message);
        messages.push(message);
    });

    io.emit("recover messages", messages);
});

io.listen(8080);

// exemplo socket