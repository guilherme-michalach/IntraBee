const router = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");

const authentication = require("../middlewares/authMiddleware");
const messagesControllers = require("../controllers/messagesControllers");

router.post("/", messagesControllers.sendMessages);
router.get("/", authentication, messagesControllers.getMessages);
// router.delete("/", authentication, messagesControllers.deleteUser);

module.exports = router;