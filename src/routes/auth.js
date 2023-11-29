const express = require('express');
const router = express.Router();
const authComponent = require('../app/Components/authComponent')

router.post('/register',authComponent.register)
router.post('/login',authComponent.login)

module.exports = router