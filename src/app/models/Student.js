const mongoose = require('mongoose');
const role = require('../../enums/user')

const { Schema } = mongoose;

const studentSchema = new Schema({
    full_name: {
        type: String,
    },
    gender: {
        type: String,
        enums: ['FEMALE','MALE']
    },
    birth_date: {
        type: Date,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    academic_year: {
        type: mongoose.Schema.ObjectId,
        ref: 'academic_year'
    }
}, { timestamps: true })

const Student = mongoose.model('students', studentSchema);

module.exports = Student