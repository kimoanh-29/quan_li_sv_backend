const mongoose = require('mongoose');
const role = require('../../enums/user')

const { Schema } = mongoose;

const student_subject_Schema = new Schema({
    student: {
        type: mongoose.Schema.ObjectId,
        ref: 'students'
    },
    subject: {
        type: mongoose.Schema.ObjectId,
        ref: 'subjects'
    },
    score: {
        type: Number,
    },
    plan: {
        type: mongoose.Schema.ObjectId,
        ref: 'plans'
    }
}, { timestamps: true })

const Student_Subject = mongoose.model('student_subject', student_subject_Schema);

module.exports = Student_Subject