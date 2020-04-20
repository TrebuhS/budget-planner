const express = require("express");
const router = new express.Router();
// const mongoose = require("mongoose");
// const User = mongoose.model("Users");
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/users/add", userController.addUser);
router.post("/users/auth", userController.isLoggedIn);
router.post("/users/login", userController.login);
router.post("/auth", auth);

router.get("/users", userController.listUser);
router.get("/users/logout", auth, userController.logout);
router.get("/users/username", auth, userController.getUsername);

module.exports = router;
