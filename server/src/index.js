require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

const { Usuario } = require("./db/models");

// Definição de middlewares, falta implementar posteriormente os de chat
app.use(cors());
app.use(express.json());
app.use("/api/images", express.static("uploads"));
app.use(morgan("dev"));

// Definindo as rotas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/chats", require("./routes/chatRoutes"));

// Definindo o middleware de tratamento de erros
app.use(require("./middlewares/errorMiddleware"));

app.listen(PORT, () => console.log("Server running in: " + PORT));