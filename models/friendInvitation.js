const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const friendInvitationSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        /* Telling mongoose that the `senderId` is a reference to the `User` model. */
        ref: "User"
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("FriendInvitation", friendInvitationSchema)