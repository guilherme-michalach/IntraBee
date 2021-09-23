require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

// Definindo os middlewares de request
app.use(cors());
app.use(express.json());
app.use("/api/images", express.static("uploads"));
app.use(morgan("dev"));

// Definindo as rotas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Definindo o middleware de tratamento de erros
app.use(require("./middlewares/errorMiddleware"));

app.listen(PORT, () => console.log("Server running in: " + PORT));