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
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Expense = mongoose.model("Income", IncomeSchema);
module.exports = Expense;
