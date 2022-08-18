const FriendInvitation = require("../../models/friendInvitation")
const User = require("../../models/user")

const postAccept = async (req, res) => {
    try {
        const {id} = req.body;
        const invitation = await FriendInvitation.findById(id);

        if (!invitation) {
            return res.status(401).send("Error occurred. Please try again.");
        }

        const {senderId, receiverId} = invitation;
        // add friends to both users
        const senderUser = await User.findById(senderId);
        const receiverUser = await User.findById(receiverId);
        senderUser.friends = [...senderUser.friends, receiverId]
        receiverUser.friends = [...receiverUser.friends, senderId]
        
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong please try again");
    }
}

module.exports = postAccept;