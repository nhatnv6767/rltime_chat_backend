const serverStore = require("../serverStore");
const friendsUpdates = require("./updates/friends");
const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    })

    // update pending friends invitations list
    friendsUpdates.updateFriendsPendingInvitation(userDetails.userId);
}
module.exports = newConnectionHandler