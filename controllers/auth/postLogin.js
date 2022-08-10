const User = require("../../models/user")
const bcrypt = require("bcryptjs")

const postLogin = async (req, res) => {
    try {
        const {mail, password} = req.body;
        const user = await User.findOne({
            mail: mail.toLowerCase(),
        })
        if(user && (await bcrypt.compare(password, user.password))) {
            // send new token
        }

        return res.status(400).send("Invalid credentials. Please try again.")
    } catch (e) {
        return res.status(500).send("Error occurred. Please try again.");
    }
}


module.exports = postLogin