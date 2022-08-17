const User = require("../../models/user")
const FriendInvitation = require("../../models/friendInvitation")
const serverStore = require("../../serverStore")

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitation = await FriendInvitation.find({
            receiverId: userId
        }).populate("senderId", "_id username mail")

        // find all active connections of specific userId
        const receiverList = serverStore.getActiveConnections(userId)

        
    } catch (err) {
        console.log(err)
    }
}