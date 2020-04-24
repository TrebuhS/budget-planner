const express = require("express");
const router = new express.Router();
const categoriesController = require("../customs/categories");
const auth = require("../middleware/auth");

router.get("/categories/list", auth, (req, res) => {
    res.status(200).send(categoriesController.getCategories());
});

module.exports = router;
