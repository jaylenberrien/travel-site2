const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = async function (req, res, next) {
    //verify auth

    const { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error: 'Auth token required'})
    }

    const token = authorization.split(' ')[1]

    try {
       const {_id} = jwt.verify(token, process.env.SECRET) 
       req.user = await User.findOne({ _id }).select('_id')
       next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not allowed'})
    }
}

module.exports = requireAuth



// go back and see why we are getting auth token required issue, i know we have
// the user verified at some point, we might have to go back another vid to see
// what was done before