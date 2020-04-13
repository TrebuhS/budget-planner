const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const controller = require("../controllers/user");
const auth = require("../middleware/auth");


router.post("/users/add", controller.addUser);
router.post("/users/auth", controller.isLoggedIn);
router.post("/users/login", controller.login);
router.post("/users/logout", auth, controller.logout);
router.post("/auth", auth);

router.get("/users", controller.listUser);

module.exports = router;
