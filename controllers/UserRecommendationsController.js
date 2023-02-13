
const e = require("express");
const bodyPartDal = require("../dal/bodyPart-DB-accessor");
const exerciseToPartDal = require("../dal/exerciseToPart-DB-accessor");
const lessonDal = require("../dal/lesson-DB-accessor");
const lessonToPartDal = require("../dal/lessonToPart-DB-accessor");

class recommendationsController {

    //get Recommendations
    getAllLesonssByPart = async (req, res) => {
        const partName = req.body.name;
        const partId = await bodyPartDal.getPartIdByPartName(partName);
        const lessonsId = await lessonToPartDal.getLessonsByPart(partId);
        var lessons = [];
        lessonsId.forEach(async e => {
            const lessonName = await lessonDal.getLessonName(e);
            lessons.push(lessonName);
        });
        res.json(lessons);
    }
    // getAllExercicesByPart = async (req, res) => {
    //     const partName = req.body.name;
    //     const partId = await bodyPartDal.getPartIdByPartName(partName);


    //     // if(!measurements?.length){
    //     //     return res.status(400).json({message: 'No measurements found'})
    //     // }
    //     //res.json(measurements)
    // }
    //get id part by part name
    //const partId= await


}

const recommendationController = new recommendationsController();
module.exports = recommendationController;

