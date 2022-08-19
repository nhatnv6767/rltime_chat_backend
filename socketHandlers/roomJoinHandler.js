const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms")

const roomJoinHandler = (socket, data) => {
    const {roomId} = data;

    const participantDetails = {}
}

module.exports = roomJoinHandler