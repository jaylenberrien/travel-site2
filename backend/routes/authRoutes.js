const { signupUser, loginUser } = require('../controllers/authController')
//try to remove the code above this line after we set up the routes i dont think we need this
const express = require('express')
const router = express.Router()


//login route
router.post('/login', loginUser)
    
//signup route
router.post('/signup', signupUser)




 









module.exports = router