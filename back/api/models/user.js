const fs = require("fs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

UserSchema.statics.checkValidCredentials = async (username, password) => {
    const user = await User.findOne({username});

    if (!user) throw new Error("User not found");

    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (!isAuthenticated) throw new Error("Wrong password");

    return user;
}

UserSchema.methods.newAuthToken = async function() {
    const user = this;
    const privateKey = fs.readFileSync(path.join(__dirname + "../../../environments/private.key"));
    const token = jwt.sign(
        {_id: user.id.toString()},
        privateKey,
        { algorithm: "RS256", expiresIn: "7 days" }
    );

    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
};

UserSchema.pre("save", async function( next ) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash( user.password, 8 );
    }
    next();
})

const User = mongoose.model("Users", UserSchema);
module.exports = User;
