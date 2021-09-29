const router = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");

const authentication = require("../middlewares/authMiddleware");
const chatControllers = require("../controllers/chatControllers");

router.post("/", authentication, chatControllers.createChat);
router.get("/", authentication, chatControllers.getChats);



module.exports = router;