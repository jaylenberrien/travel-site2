const { createTrip } = require('../controllers/tripControllers')
const express = require('express')
const router = express.Router()

 const requireAuth = require('../middleware/requireAuth')

 router.use(requireAuth)

//create trip   
router.post('/create', createTrip)













module.exports = router
