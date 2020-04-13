const mongoose = require("mongoose");
const User = mongoose.model("Users");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

exports.listUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    })
}

exports.addUser = async ( req, res ) => {
    const user = new User(req.body);
    try {
        const token = await user.newAuthToken();

        res.status( 200 ).send( {user, token} );
    } catch ( e ) {
        res.status( 400 ).send( e );
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.checkValidCredentials(req.body.username, req.body.password);
        const token = await user.newAuthToken();
        res.status(200).send(token);
    } catch ( e ) {
        res.status(400).send(e);
    }
}

exports.isLoggedIn = async (req, res) => {
    try {
        const token = req.body.token.replace("Bearer", "").trim();
        const publicKey = fs.readFileSync(path.join(__dirname + "../../../environments/public.key"));
        const decoded = jwt.verify(token, publicKey, {algorithm: "RS256" });
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        })

        if (!user) {
            throw new Error();
        }

        res.status(200).send(true);
    } catch ( e ) {
        res.status(200).send(false)
    }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();
        res.status(200).send(req.user);
    } catch ( e ) {
        res.status(400).send(e);
    }
}
