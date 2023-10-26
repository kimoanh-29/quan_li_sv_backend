const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
    },
    credits: {
        type: Number,
    }
})

const Subject = mongoose.model('subjects', subjectSchema);

module.exports = Subject