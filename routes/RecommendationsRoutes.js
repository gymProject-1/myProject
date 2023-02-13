const express = require('express')
const router = express.Router()
const RecommendationsController = require('../controllers/UserRecommendationsController')


router.route('/:partName')
   // .get(RecommendationsController.getAllLesonssByPart)// to do for exercise
    .get(RecommendationsController.getAllExercisesByPart)
module.exports = router

