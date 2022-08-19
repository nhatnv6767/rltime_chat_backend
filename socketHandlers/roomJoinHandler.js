const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms")

const roomJoinHandler = (socket, data) => {
    const {roomId} = data;

    const participantDetails = {
        userId: socket.user.userId,
        socketId: socket.id,
    }

    const roomDetails = serverStore.getActiveRoom(roomId)
    serverStore.joinActiveRoom(roomId, participantDetails)
}

module.exports = roomJoinHandler