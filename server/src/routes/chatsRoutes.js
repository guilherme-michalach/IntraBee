const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const chatsControllers = require("../controllers/chatsControllers");

router.post("/", authentication, chatsControllers.createChat);
router.get("/", authentication, chatsControllers.getChats);



module.exports = router;