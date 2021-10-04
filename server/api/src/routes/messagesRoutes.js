const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const messagesControllers = require("../controllers/messagesControllers");

// Criar e enviar mensagens

router.post("/", authentication, messagesControllers.sendMessages);

// Obter mensagens

router.get("/:id", authentication, messagesControllers.getMessages);

// Deletar mensagens

// router.delete("/", authentication, messagesControllers.);

module.exports = router;