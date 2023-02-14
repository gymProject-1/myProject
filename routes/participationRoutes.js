const express = require('express')
const router = express.Router()
const participationController = require('../controllers/participationController')


router.route('/')
    .get(participationController.getAllParticipations)
    .post(participationController.createParticipation)
    .put(participationController.updateLastParticipation)

router.route('/:id')
    .get(participationController.getAllParticipationByMemberId)
router.route('/:Last_id')
    .get(participationController.getLastParticipationByMemberId)

module.exports = router
