const serverStore = require("../serverStore");
const friendsUpdate = require("./updates/friends");
const roomsUpdate = require("./updates/rooms");

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    })

    // update pending friends invitations list
    await friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);

    // update friends list
    await friendsUpdate.updateFriends(userDetails.userId)

    roomsUpdate.updateRooms(socket.id);
}
module.exports = newConnectionHandler