const mongoose = require('mongoose');
const role = require('../../enums/user')

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
        enums: Object.values(role),
        default: "USER",
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User