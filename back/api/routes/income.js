const express = require("express");
const router = new express.Router();
const transferController = require("../controllers/transfers");
const auth = require("../middleware/auth");

router.post("/transfers/income/add", auth, (req, res) => {
    transferController.addTransfer("i",req)
        .then(income => {
            res.status(200).send(income)
        })
});
router.post("/transfers/income/list", auth, (req, res) => {
    // res.send(req);
    transferController.getAllMonthTransfersWithType("i", req)
        .then(incomes => {
            res.status(200).send(incomes);
        })
});

module.exports = router;
