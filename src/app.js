const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const router = require('./routes/index')

const app = express()

const port = process.env.PORT || 3001


mongoose.connect('mongodb://127.0.0.1:27017/quan_li_sinh_vien');

app.get('/', (req, res) => {
    res.json('heloo!')
})

app.use(bodyParser.json())
app.use(router);


// endpoint

// router


app.listen(port, () => {
    console.log(`Server running on ${port}`);
})