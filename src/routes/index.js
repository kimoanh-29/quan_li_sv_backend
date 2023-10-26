const express = require('express');
const User = require('../app/models/users');
const Subject = require('../app/models/subject');

const router = express.Router()

router.post('/user/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.json('Error');
    }
})

router.post('/user/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username})
        console.log(user);
        if(!user){
            return res.json('khong tim thay tai khoan!')
        }
        const isMatch = user.password === password;
        if(!isMatch) {
            return res.json('nhap sai mat khau')
        }
        return res.json('login thanh cong')
    } catch (error) {
        return res.json('error');
    }
})

router.post('/subject/create', async (req, res) => {
    const { name, code, credits } = req.body;
    try {
        const subject = new Subject(req.body);
        console.log(subject);
        await subject.save() 
        res.json(subject);
    } catch (error) {
        res.json(error)
        
    }

})


module.exports = router