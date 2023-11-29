const express = require('express');
const router = express.Router();
const subject = require('./subject');
const auth = require('./auth');

router.use('/subject',subject);
router.use('/auth',auth);



module.exports = router