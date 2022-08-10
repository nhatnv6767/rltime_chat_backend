const User = require("../../models/user")
const postRegister = async (req, res) => {
    try {
        const {username, mail, password} = req.body;

        // check if user exists
        const userExists = await User.exists({
            mail: mail,
        })
    } catch (e) {
        return ré.status(500).send("Error occurred. Please try again.");
    }
}


module.exports = postRegister