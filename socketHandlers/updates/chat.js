const Conversation = require('../models/conversation')
const serverStore = require("../../serverStore")

const updateChatHistory = async (conversationId) => {
    const conversation = await Conversation.findById(conversationId).populate({
        path: "messages",
        model: "Model",
        populate: {
            path: "author",
            model: "User",
            select: "username _id",
        }
    })

    if (conversation) {
        const io = serverStore.getSocketServerInstance();

    }
}