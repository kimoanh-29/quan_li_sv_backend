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
    }
}, { timestamps: true })

const Plan = mongoose.model('plans', planSchema);

module.exports = Plan