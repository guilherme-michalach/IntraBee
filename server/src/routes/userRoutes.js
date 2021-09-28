const router = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");

const authentication = require("../middlewares/authMiddleware");
const usersControllers = require("../controllers/usersControllers");

router.get("/", authentication, usersControllers.getUser);
router.post("/", usersControllers.createUser);
// multer(multerConfig).single("avatar"),
router.delete("/", authentication, usersControllers.deleteUser);
router.put("/changePassword", authentication, usersControllers.changePassword)


module.exports = router;