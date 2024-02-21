const apiController = require('../controllers/apiController')
const express = require('express')
const router = express.Router()

//route to receive the post call
router.post('/city', apiController.passQuery)

router.post('/photos', apiController.passPics)

router.post('/bio', apiController.passBio)

router.post('/location', apiController.passLocation)

router.post('/restaurants', apiController.passRestaurants)

router.post('/hotels', apiController.passHotels)

router.post('/attractions', apiController.passAttractions)

router.post('/experience-pics', apiController.passExperiencePics)

module.exports = router
