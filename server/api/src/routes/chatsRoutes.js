const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const chatsControllers = require("../controllers/chatsControllers");

// Criar chat

router.post("/", authentication, chatsControllers.createChat);

// Obter chats do usuário

router.get("/", authentication, chatsControllers.getChats);

module.exports = router;