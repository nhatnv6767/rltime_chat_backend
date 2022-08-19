const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const serverStore = require("./serverStore");
const directMessageHandler = require("./socketHandlers/directMessageHandler")
const directChatHistoryHandler = require("./socketHandlers/directChatHistoryHandler")
const roomCreateHandler = require("./socketHandlers/roomCreateHandler")
const roomJoinHandler = require("./socketHandlers/roomJoinHandler")

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    serverStore.setSocketServerInstance(io)

    io.use((socket, next) => {
        authSocket(socket, next);
    });

    const emitOnlineUsers = () => {
        const onlineUsers = serverStore.getOnlineUsers();
        io.emit(
            "online-users", {onlineUsers}
        )
    }

    io.on('connection', async (socket) => {
        console.log('user connected');
        console.log(socket.id);
        await newConnectionHandler(socket, io);

        emitOnlineUsers()

        socket.on("direct-message", (data) => {
            directMessageHandler(socket, data);
        })

        socket.on("direct-chat-history", (data) => {
            directChatHistoryHandler(socket, data);
        })

        socket.on("room-create", () => {
            roomCreateHandler(socket)
        })

        socket.on("room-join", (data) => {
            roomJoinHandler(data)
        })

        socket.on("disconnect", () => {
            disconnectHandler(socket)
        })

    });

    setInterval(() => {
        emitOnlineUsers()
    }, 8000)
};

module.exports = {
    registerSocketServer,
};