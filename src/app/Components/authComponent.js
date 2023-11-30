const User = require('../models/User')
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        // Find user with username
        const user = await User.findOne({
            username,
        })
        if(!user){
            throw new Error('User not found!')
        }
        // Compare password
        const isMatch = user.password == password;
        if (!isMatch) {
            throw new Error('Password incorrect!')
        }
        // const token = jwt.sign(user._id, process.env.JWT_TOKEN);
        console.log(process.env.JWT_TOKEN);
        res.status(200).json({
            user,
            token
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
}

const logout = async (req, res) => {
    res.status(200).json('Logout successfully!')
}

const getMe = async (req, res) => {
    res.status(200).json(req.user);
}

module.exports = {
    login,
    logout,
    getMe,
    register,
}