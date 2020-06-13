const transferController = require("../controllers/transfers");
const Expense = require("../models/expense");
const Income = require("../models/income");

exports.getMonthlyBalance = async (req, res) => {
    let income = 0;


    await transferController.getAllMonthTransfersWithType( "i", req.body, req.user._id)
        .then(incs => {
            incs.forEach(inc => {
                income += inc.amount;
            })
        });

    let expenses = 0;
    await transferController.getAllMonthTransfersWithType( "e", req.body, req.user._id )
        .then(exps => {
            exps.forEach(exp => {
                expenses += exp.amount;
            })
        });

    res.status(200).send({
        incomes: income,
        expenses: expenses,
        total: income - expenses
    })
}

exports.getTotalBalance = async (req, res) => {
    let total = 0;
    await Income.find( {
        userId: req.user._id
    } ).then( incs => {
        incs.forEach( inc => {
            total += inc.amount;
        } )
    } );

    await Expense.find( {
        userId: req.user._id
    } ).then(exps => {
        exps.forEach( exp => {
            total -= exp.amount;
        } )
    });

    res.status(200).send({total});
}
