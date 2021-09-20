const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));



