const mongoose = require('mongoose');


const userScheme = new mongoose.Schema({
    mail: { type: String, unique: true },

})