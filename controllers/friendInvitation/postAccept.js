const FriendInvitation = require("../../models/friendInvitation")
const User = require("../../models/user")
const friendsUpdates = require("../../socketHandlers/updates/friends");

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

        await senderUser.save();
        await receiverUser.save();

        // delete invitation
        // DEFIX - DEBUG: When user a send request to user b and user b also sent a request to user a
        // we need to find all and delete that
        await FriendInvitation.findByIdAndDelete(id);

        // update list of the friends if the users are online
        await friendsUpdates.updateFriends(senderId.toString());
        await friendsUpdates.updateFriends(receiverId.toString());

        // update list of friends pending invitations
        await friendsUpdates.updateFriendsPendingInvitations(receiverId.toString())

        return res.status(200).send("Friend successfully added");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong please try again");
    }
}

module.exports = postAccept;