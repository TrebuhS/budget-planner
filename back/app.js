const express = require("express");


const userRoutes = require("./api/routes/user");
const app = express();
require("./api/db/db");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({encoded: true, extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(userRoutes);

app.get("/", (req,res) => {
    res.send("hi");
})

app.listen(3001, () => {
    console.log("Server running on port 3001! :D");
});
