const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost/budget";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// const db = mongoose.connection;
