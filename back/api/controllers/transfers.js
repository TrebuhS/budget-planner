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
        userId: req.user._id
    } );
    await newTransfer.save();
    return newTransfer;
}

exports.getAllMonthTransfersWithType = async (type, req) => {
    let Transfer;
    if (type === "i") {
        Transfer = Income;
    } else {
        Transfer = Expense;
    }

    // return req;

    return await Transfer.find( {
        userId: req.user._id,
        "$where": function () {
            return this.createdDate.getMonth() === req.body.date.getMonth() && this.createdDate.getFullYear() === req.body.date.getFullYear();
        }
    } );
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

