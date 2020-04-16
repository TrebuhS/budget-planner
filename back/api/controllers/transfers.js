const mongoose = require("mongoose");
const Expense = mongoose.model("Expense");
const Income = mongoose.model("Income");

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

    return await Transfer.find( {
        userId: req.body.user._id,
        "$where": function () {
            return this.createdAt.getMonth() === req.body.date.getMonth() && this.createdAt.getFullYear() === req.body.date.getFullYear();
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

