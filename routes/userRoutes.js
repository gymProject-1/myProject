const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.route('/')
    // .get(scheduleController.getAllschedules)
    .post(userController.createNewMeasurement)
router.route('/:id')
    .get(userController.getMemberByUserId)
module.exports = router

