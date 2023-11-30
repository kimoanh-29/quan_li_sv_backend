const mongoose = require('mongoose');
const role = require('../../enums/user')

const { Schema } = mongoose;

const semesterSchema = new Schema({
    name: {
        type: String,
    },
    create_limit: {
        type: Number,
    }
}, { timestamps: true })

const Semester = mongoose.model('semesters', semesterSchema);

module.exports = Semester