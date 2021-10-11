const { Server } = require("socket.io");

const io = new Server({ cors: { origin: "http://c815-177-200-213-98.ngrok.io" } });

let users = [];

io.on("connection", (socket) => {
    const userId = socket.handshake.auth.userId;

    console.log(`User connected, the ID is: ${userId}`);
    const userAlreadyConnected = users.find(user => user === userId)
    
    if (!userAlreadyConnected) {
        users.push(userId);
    }

    console.log(users);

    socket.on("join chats", chatsIds => {
        chatsIds.forEach(chat => socket.join(`chat: ${chat}`));
        console.log(socket.rooms);
    });

    socket.on("send message", message => {
       console.log(message);
       io.to(`chat: ${message.chat_id}`).emit("new message", message);
    });

    socket.on("disconnect", () => {
        console.log(`User with the ID ${userId} disconnected`);
        users = users.filter(user => user !== userId);
        console.log(users);
    });
});

io.listen(8080);