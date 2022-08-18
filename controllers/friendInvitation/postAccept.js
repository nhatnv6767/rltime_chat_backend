const FriendInvitation = require("../../models/friendInvitation")

const postAccept = async (req, res) => {
    try {
        const {id} = req.body;
        const invitation = await FriendInvitation.findById(id)
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong please try again");
    }
}

module.exports = postAccept;