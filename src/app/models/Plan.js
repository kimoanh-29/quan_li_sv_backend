const mongoose = require('mongoose');
const role = require('../../enums/user')

const { Schema } = mongoose;

const planSchema = new Schema({
    semester: {
        type: mongoose.Schema.ObjectId,
        ref: 'semesters'
    },
    academic_year: {
        type: mongoose.Schema.ObjectId,
        ref: 'academic_year'
    },
    subject: {
        type: mongoose.Schema.ObjectId,
        ref: 'subjects'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    score_1: {
        type: Number
    },
    score_2: {
        type: String,
    },
}, { timestamps: true })

const Plan = mongoose.model('plans', planSchema);

module.exports = Plan