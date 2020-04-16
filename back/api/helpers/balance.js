const transferController = require("../controllers/transfers");

exports.getMonthlyBalance = async (req, res) => {
    let income = 0;
    await transferController.getAllMonthTransfersWithType( "i", req )
        .then(incs => {
            incs.forEach(inc => {
                income += inc.amount;
            })
        });

    let expenses = 0;
    await transferController.getAllMonthTransfersWithType( "e", req )
        .then(exps => {
            exps.forEach(exp => {
                expenses += exp.amount;
            })
        });

    res.status(200).send({
        income: income,
        expenses: expenses,
        total: income - expenses
    })
}
