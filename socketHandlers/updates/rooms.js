const serverStore = require("../../serverStore");

const updateRooms = (toSpecifiedTargetId = null) => {
    const io = serverStore.getSocketServerInstance();
    const activeRooms = serverStore.getActiveRooms();
}