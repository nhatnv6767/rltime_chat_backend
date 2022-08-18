const Message = require('../models/message')
const Conversation = require('../models/conversation')

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
        const conversation = await Conversation.findOne({
            participants: {
                $all: [userId, receiverUserId]
            }
        })
    } catch (err) {
        console.log(err);
    }
}