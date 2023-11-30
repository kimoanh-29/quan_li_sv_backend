const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const path = require('path');
const cors = require('cors')

const router = require('./routes/index')

const app = express()

const port = process.env.PORT || 3001

// Public path
const publicPath = path.join(__dirname,'../public');
// Config static file
app.use(express.static(publicPath))

// Connect db
db.connect();

// [Middleware]
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()

// Route welcome!
app.get('/', (req, res) => {
    res.json('heloo!')
})

// Router
app.use(router);


app.listen(port, () => {
    console.log(`Server running on ${port}`);
})