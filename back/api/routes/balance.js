const express = require("express");
const router = new express.Router();
const balanceHelper = require("../helpers/balance");
const auth = require("../middleware/auth");

router.post("/balance/monthly", auth, balanceHelper.getMonthlyBalance);
router.get("/balance/total", auth, balanceHelper.getTotalBalance);

module.exports = router;
