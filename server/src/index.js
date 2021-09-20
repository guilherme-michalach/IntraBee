const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

// Definição de middlewares, falta implementar posteriormente os de chat
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Definição de rotas, falta implementar posteriormente os de chat
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Definição de middlewares de tratamento de erro
app.use(require("./middlewares/errorMiddleware"));

// Definição da rota de documentação
// app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));



