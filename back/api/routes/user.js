const express = require("express");
const router = new express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/users/add", userController.addUser);
router.post("/users/auth", userController.isLoggedIn);
router.post("/users/login", userController.login);
router.post("/users/logout", auth, userController.logout);
router.post("/auth", auth);

router.get("/users", userController.listUser);

module.exports = router;
