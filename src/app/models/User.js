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
    full_name: {
        type: String,
    },
    gender: {
        type: String,
    },
    birth_date: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        enums: Object.values(role),
        default: "USER",
    }
} , { timestamps: true } )

const User = mongoose.model('users', userSchema);

module.exports = User