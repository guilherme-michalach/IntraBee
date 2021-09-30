const router = require("express").Router();

// Acessar usuário

router.post("/login", require("../controllers/authControllers").login);

module.exports = router;