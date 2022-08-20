const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms")

const roomLeaveHandler = (socket, data) => {
    const {roomId} = data;
}

module.exports = roomLeaveHandler