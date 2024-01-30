const apiController = require('../controllers/apiController')
const express = require('express')
const router = express.Router()

//route to receive the post call
router.post('/city', apiController.passQuery)


module.exports = router
