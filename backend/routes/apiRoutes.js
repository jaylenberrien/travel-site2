const apiController = require('../controllers/apiController')
const express = require('express')
const router = express.Router()

//route to receive the post call
router.get('/', apiController.passQuery)


module.exports = router