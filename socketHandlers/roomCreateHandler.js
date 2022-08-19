const roomCreateHandler = (socket) => {
    console.log("roomCreateHandler")
    const socketId = socket.id;
    const userId = socket.user.userId;


    socket.emit("room-create", {
        roomDetails
    })
}