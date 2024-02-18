const apiController = require('../controllers/apiController')
const express = require('express')
const router = express.Router()

//route to receive the post call
router.post('/city', apiController.passQuery)

router.post('/photos', apiController.passPics)

router.post('/bio', apiController.passBio)


module.exports = router
