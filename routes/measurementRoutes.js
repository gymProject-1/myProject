const express = require('express')
const router = express.Router();
const measurementController = require('../controllers/measurementController')

router.route('/')
.post(measurementController.createNewMeasurement)

router.route('/:id')
    .get(measurementController.getAllMeasurementsByUserId)
    
module.exports = router
