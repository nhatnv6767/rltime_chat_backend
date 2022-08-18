const directMessageHandler = async (socket, data) => {
    try {
        const {userId} = socket.user;
        const {receiverUserId, content} = data;
        
    } catch (err) {
        console.log(err);
    }
}