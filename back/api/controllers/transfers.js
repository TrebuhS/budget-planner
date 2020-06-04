const mongoose = require("mongoose");
const Expense = require("../models/expense");
const Income = require("../models/income");

exports.addTransfer = async (type, req) => {
    let Transfer;
    if (type === "i") {
        Transfer = Income;
    } else {
        Transfer = Expense;
    }

    const newTransfer = new Transfer( {
        ...req.body,
        createdDate: new Date(req.body.year, req.body.month, 2),
        userId: req.user._id
    } );
    await newTransfer.save();
    return newTransfer;
}

getAllMonthTransfersWithType = async (type, date, userId) => {
    let Transfer;
    if (type === "i") {
        Transfer = Income;
    } else {
        Transfer = Expense;
    }

    const lastDay = new Date(date.year, date.month - 1, 0).getDate();
    const from = new Date(date.year, date.month - 1, 2);
    const to = new Date(date.year, date.month - 1, lastDay);
    return await Transfer.find( {
        userId: userId,
        createdDate: {
            '$lte': to,
            '$gte': from
        }
    } );
};

exports.getSortedExpenses = async (req, res) => {
    try {
        const expenses = await getAllMonthTransfersWithType("e", {year: req.body.year, month: req.body.month}, req.user._id);
        const sorted = {};
        expenses.forEach(expense => {
            if (sorted[expense.category]) {
                sorted[expense.category] += expense.amount;
            } else {
                sorted[expense.category] = expense.amount;
            }
        })
        res.status(200).send(sorted);
    } catch ( e ) {
        res.status(400).send(e);
    }
}

// exports.addTransferRoute = async (req, res, type) => {
//     try {
//         const transfer = await addTransfer(type, req);
//         res.status( 200 ).send( transfer );
//     } catch ( e ) {
//         res.send(e);
//     }
// };

exports.getAllMonthTransfersRoute = async (req, res, type) => {
    try {
        const transfers = getAllMonthTransfersWithType(type, req);
        res.status(200).send(transfers);
    } catch ( e ) {
        res.send(e);
    }
}

