const jwt = require("jsonwebtoken");
const User = require("../models/user");
const path = require("path");
const fs = require("fs");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer", "").trim();

        const publicKey = fs.readFileSync(path.join(__dirname + "../../../environments/public.key"));
        const decoded = jwt.verify(token, publicKey, {algorithm: "RS256" });
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        })

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch ( e ) {
        res.status(401).send({error: "Authenticate!"})
    }
}
