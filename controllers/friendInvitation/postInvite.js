const postInvite = async (req, res) => {
    const {targetMailAddress} = req.body;

    const {userId, mail} = req.user;

    return res.send("Controller is working");
}

module.exports = postInvite;