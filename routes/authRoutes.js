const express = require('express')
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers")
const Joi = require('joi')
const validator = require("express-joi-validation").createValidator({});



router.post('/register', authControllers.controllers.postRegister)
router.post("/login", authControllers.controllers.postLogin)

module.exports = router;