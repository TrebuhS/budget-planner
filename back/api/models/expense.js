const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
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

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;
