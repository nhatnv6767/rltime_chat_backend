const express = require('express')
const router = express.Router();
const Joi = require('joi')
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth")


const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),
})

router.post('/invite',
    auth,
    validator.body(postFriendInvitationSchema),
    friendInvitationControllers.controllers.postInvite
)