const express = require('express')
const router = express.Router()
const participationController = require('../controllers/participationController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/')
    .get(participationController.getAllParticipations)
    .post(participationController.createParticipation)
    .put(participationController.updateLastParticipation)

router.route('/:id')
<<<<<<< HEAD
    .get(participationController.getAllParticipationByMemberId)
router.route('/:Last_id')
    .get(participationController.getLastParticipationByMemberId)

=======
    .get(participationController.getAllParticipationByUserId)
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
module.exports = router
