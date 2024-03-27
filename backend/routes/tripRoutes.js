const { createTrip } = require('../controllers/tripControllers')
const express = require('express')
const router = express.Router()


//create trip
router.post('/create', createTrip)













module.exports = router
