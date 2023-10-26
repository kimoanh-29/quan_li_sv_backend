const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "USER",
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User