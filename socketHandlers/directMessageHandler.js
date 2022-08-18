const Message = require('../models/message')

const directMessageHandler = async (socket, data) => {
    try {
        const {userId} = socket.user;
        const {receiverUserId, content} = data;

        // create new message
        const message = await Message.create({
            content: content,
            authorId: userId,
            date: new Date(),
            type: "DIRECT",
        })

        //find if conversation exist with this two users - if not create new
    } catch (err) {
        console.log(err);
    }
}