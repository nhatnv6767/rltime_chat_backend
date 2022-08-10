const User = require("../../models/user")
const bcrypt = require("bcryptjs")
const postRegister = async (req, res) => {
    try {
        const {username, mail, password} = req.body;

        // check if user exists
        const userExists = await User.exists({
            mail: mail.toLowerCase()
        })
        if(userExists){
            return res.status(409).send("E-mail already in use")
        }
        // encrypt password
        const encryptedPassword = await bcrypt.hash(password, 10);
        // create user document and save in database
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword,
        })

        // create JWT token
        const token = "JWT TOKEN";

        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            }
        })
    } catch (e) {
        return res.status(500).send("Error occurred. Please try again.");
    }
}


module.exports = postRegister