const { where } = require('sequelize');
const db = require('../models/index')
const exercisesByPart = db.exercisesToParts

class exercisesByPartDataAccessor {

   // קודי תרגילים לפי קוד אזור
    getLessonsByPart = async (partId) => {
        const exercises = await exercisesByPart.findAll({where:{id:partId}});
        return exercises;
    }
}
const exerciseByPartDataAccessor = new exercisesByPartDataAccessor();
module.exports = exerciseByPartDataAccessor;
