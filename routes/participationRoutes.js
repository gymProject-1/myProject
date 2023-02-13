const express = require('express')
const router = express.Router()
const participationController = require('../controllers/participationController')


router.route('/')
    .get(participationController.getAllParticipations)  
    .post(participationController.createParticipation)

router.route('/:id')
    .get(participationController.getAllParticipationByMemberId)
module.exports = router
