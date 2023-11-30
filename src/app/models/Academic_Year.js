const mongoose = require('mongoose');
const role = require('../../enums/user')

const { Schema } = mongoose;

const academic_year_Schema = new Schema({
    start_year: {
        type: String,
    },
    end_year: {
        type: String,
    },
}, { timestamps: true })

const Academic_Year = mongoose.model('academic_year', academic_year_Schema);

module.exports = Academic_Year