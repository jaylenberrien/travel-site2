const User = require('../models/User')
const jwt = require("jsonwebtoken")
const secret = process.env.VITE_SECRET;


const createToken = (_id) =>{
    return jwt.sign({_id}, secret, { expiresIn: '1d' })
}

//login user
const loginUser = async(req, res) =>{
    res.json({msg: "login user"})
}

//signup user\
const signupUser = async(req, res) =>{
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)

        //creating a token 

        const token = createToken(user._id)
        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // res.json({msg: "login user"})
}


module.exports = {
    signupUser,
    loginUser
}