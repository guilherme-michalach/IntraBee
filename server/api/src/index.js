require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 3001;

// Definição de middlewares

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// Definição as rotas

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/users", require("./routes/usersRoutes"));

app.use("/api/chats", require("./routes/chatsRoutes"));

app.use("/api/messages", require("./routes/messagesRoutes"));

app.use("/api/todos", require("./routes/todosRoutes"));

// Definição do middleware de tratamento de erros

app.use(require("./middlewares/errorMiddleware"));

app.listen(PORT, () => console.log("Server running in: " + PORT));