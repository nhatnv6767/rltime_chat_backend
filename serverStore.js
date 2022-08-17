const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
  /* Adding a new key-value pair to the Map. */
  connectedUsers.set(socketId, {userId});
};

module.exports = {
  addNewConnectedUser,
  
};