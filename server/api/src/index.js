require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

// Definição de middlewares

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// app.use("/api/images", express.static("uploads"));

// Definição as rotas

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/users", require("./routes/usersRoutes"));

app.use("/api/chats", require("./routes/chatsRoutes"));

app.use("/api/messages", require("./routes/messagesRoutes"));

// Definição do middleware de tratamento de erros

app.use(require("./middlewares/errorMiddleware"));

app.listen(PORT, () => console.log("Server running in: " + PORT));