const connectedUsers = new Map();

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

    connectedUsers.forEach(function (key, value) {
        /* Checking if the userId of the connected user is the same as the userId of the user that is trying to connect. */
        if (value.userId === userId) {
            activeConnections.push(key)
        }
    })
    return activeConnections;
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
    getActiveConnections,
    setSocketServerInstance,
    getSocketServerInstance,
};