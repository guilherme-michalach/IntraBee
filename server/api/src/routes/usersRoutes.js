const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

const authentication = require("../middlewares/authMiddleware")

// Criar usuário

router.post("/", usersControllers.createUser);

// Obter informações de um usuário

router.get("/", authentication, usersControllers.getUser);

// Mudar senha de acesso do usuário

router.put("/changePassword", authentication, usersControllers.changePassword);

// Apagar conta do usuário

router.delete("/", authentication, usersControllers.deleteUser);


module.exports = router;