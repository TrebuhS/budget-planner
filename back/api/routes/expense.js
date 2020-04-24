const express = require("express");
const router = new express.Router();
const transferController = require("../controllers/transfers");
const auth = require("../middleware/auth");

router.post("/transfers/expense/add", auth, (req, res) => {
    transferController.addTransfer("e",req)
        .then(expense => {
            res.status(200).send(expense)
        })
});
router.post("/transfers/expense/list", auth, (req, res) => {
    transferController.getAllMonthTransfersWithType("e", req)
        .then(expense => {
            res.status(200).send(expense);
        })
        .catch(e => {
            res.status(400).send(e);
        })
});

module.exports = router;
