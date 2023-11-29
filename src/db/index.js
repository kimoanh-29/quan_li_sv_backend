const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/quan_li_sinh_vien', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect db successfully!');
    } catch (error) {
        console.log('Connect db failed!');
    }
}

module.exports = { connect }