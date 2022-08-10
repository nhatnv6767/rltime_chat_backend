const express = require('express')
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers")
const Joi = require('joi')
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12),
    password: Joi.string().min(6).max(12),
    mail: Joi.string().email(),
})

router.post('/register', authControllers.controllers.postRegister)
router.post("/login", authControllers.controllers.postLogin)

module.exports = router;