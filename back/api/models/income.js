const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Income = mongoose.model("Income", IncomeSchema);
module.exports = Income;
