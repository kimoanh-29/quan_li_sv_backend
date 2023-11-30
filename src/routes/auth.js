const express = require('express');
const router = express.Router();
const authComponent = require('../app/Components/authComponent')
const auth = require('../middlewares/auth')

router.post('/register',authComponent.register)
router.post('/login',authComponent.login)

router.use(auth)

router.get('/me',authComponent.getMe)
router.post('/logout',authComponent.logout)

module.exports = router