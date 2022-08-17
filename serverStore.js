const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
    /* Adding a new key-value pair to the Map. */
    connectedUsers.set(socketId, {userId});
    console.log("New connected users")
    console.log(connectedUsers)
};

module.exports = {
    addNewConnectedUser,

};
