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
        // console.log(token);

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const logout = async (req, res) => {

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

const getMe = async (req, res) => {

}

module.exports = {
    login,
    logout,
    getMe,
    register,
}