const User = require("../../models/user")
const bcrypt = require("bcryptjs")

const postLogin = async (req, res) => {
    try {
        res.send("login route");
    } catch (e) {
        return res.status(500).send("Error occurred. Please try again.");
    }
}


module.exports = postLogin