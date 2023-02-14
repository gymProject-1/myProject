const express = require('express')
const router = express.Router()
const participationController = require('../controllers/participationController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/')
    .get(participationController.getAllParticipations)  
    .post(participationController.createParticipation)

router.route('/:id')
    .get(participationController.getAllParticipationByUserId)
module.exports = router
