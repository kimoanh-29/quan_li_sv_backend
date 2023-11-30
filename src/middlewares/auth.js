const User = require("../app/models/User");

const auth = async (req, res, next) => {
    try {
        const token = await req.header('authorization').replace('Bearer ','');
        const decode = jwt.verify(token,process.env.JWT_TOKEN);
        console.log(decode);
        const user = await User.findById(decode._id);
        if(!user){
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({error: 'please authenticate'});
    }
}

module.exports = auth