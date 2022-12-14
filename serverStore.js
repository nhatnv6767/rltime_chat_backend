const uuid = require('uuid');

const connectedUsers = new Map();
let activeRooms = [];

let io = null;

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
}

const getSocketServerInstance = () => {
    return io;
}

const addNewConnectedUser = ({socketId, userId}) => {
    /* Adding a new key-value pair to the Map. */
    connectedUsers.set(socketId, {userId});
    console.log("New connected users")
    console.log(connectedUsers)
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log("New connected users")
        console.log(connectedUsers)
    }
}

const getActiveConnections = (userId) => {
    const activeConnections = [];

    connectedUsers.forEach(function (value, key) {
        /* Checking if the userId of the connected user is the same as the userId of the user that is trying to connect. */
        if (value.userId === userId) {
            activeConnections.push(key)
        }
    })
    return activeConnections;
}

const getOnlineUsers = () => {
    const onlineUsers = [];

    connectedUsers.forEach((value, key) => {
        onlineUsers.push({
            socketId: key,
            userId: value.userId,
        })
    })
    return onlineUsers;
}

// rooms
const addNewActiveRoom = (userId, socketId) => {
    const newActiveRoom = {
        roomCreator: {
            userId,
            socketId,
        },
        participants: [
            {
                userId,
                socketId,
            }
        ],
        roomId: uuid.v4(),
    }

    activeRooms = ([...activeRooms, newActiveRoom])
    console.log("Active room: ")
    console.log(activeRooms)

    return newActiveRoom
}

const getActiveRooms = () => {
    return [...activeRooms]
}

const getActiveRoom = (roomId) => {
    const activeRoom = activeRooms.find(activeRoom => activeRoom.roomId === roomId)

    if (activeRoom) {
        return {
            ...activeRoom,
        }
    } else {
        return null;
    }
}

const joinActiveRoom = (roomId, newParticipant) => {
    const room = activeRooms.find(room => room.roomId === roomId);
    activeRooms = activeRooms.filter((room) => room.roomId !== roomId)

    const updatedRoom = {
        ...room,
        participants: [...room.participants, newParticipant]
    }

    activeRooms.push(updatedRoom)
    console.log("joinActiveRoom:")
    console.log(activeRooms)
}

const leaveActiveRoom = (roomId, participantSocketId) => {
    const activeRoom = activeRooms.find(room => room.roomId === roomId);
    if (activeRoom) {
        const copyOfActiveRoom = {...activeRoom};
        copyOfActiveRoom.participants = copyOfActiveRoom.participants
            .filter(participant => participant.socketId !== participantSocketId)

        activeRooms = activeRooms.filter(room => room.roomId !== roomId)
        if (copyOfActiveRoom.participants.length > 0) {
            activeRooms.push(copyOfActiveRoom)
        }
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
    getActiveConnections,
    setSocketServerInstance,
    getSocketServerInstance,
    getOnlineUsers,
    addNewActiveRoom,
    getActiveRooms,
    getActiveRoom,
    joinActiveRoom,
    leaveActiveRoom,
};