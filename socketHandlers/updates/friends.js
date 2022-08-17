const User = require("../../models/user")
const FriendInvitation = require("../../models/friendInvitation")
const serverStore = require("../../serverStore")

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitation = await FriendInvitation.find({
            receiverId: userId
        })
    } catch (err) {
        console.log(err)
    }
}