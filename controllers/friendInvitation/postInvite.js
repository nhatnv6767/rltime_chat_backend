const postInvite = async (req, res) => {
    const {targetMailAddress} = req.body;

    const {userId, mail} = req.user;

    // check if friend that we would like to invite is not user

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send("Sorry. You cannot become friend with yourself.");
    }

    return res.send("Controller is working");
}

module.exports = postInvite;