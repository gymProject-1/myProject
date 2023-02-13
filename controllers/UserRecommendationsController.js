
const e = require("express");
const bodyPartDal = require("../dal/bodyPart-DB-accessor");
const exerciseToPartDal = require("../dal/exerciseToPart-DB-accessor");
const lessonDal = require("../dal/lesson-DB-accessor");
const lessonToPartDal = require("../dal/lessonToPart-DB-accessor");

class recommendationsController {

    //get Recommendations
    getAllLesonssByPart = async (req, res) => {
        const partName = req.params.partName;
        console.log("ruth   " + partName);
        const partId1 = await bodyPartDal.getPartIdByPartName(partName);
        const partId = partId1.dataValues['id'];
        console.log("ruth   " + partId);
        const lessonsId = await lessonToPartDal.getLessonsByPart(partId);
        console.log("ruth hh  " + lessonsId);
        var lessons = [];
        // const b = async () => {
        await lessonsId.forEach(async (e) => {
            console.log("enter  " + e);
            var eId = e.dataValues['id'];
            console.log("enter  " + eId);
            var lessonName = await lessonDal.getLessonName(eId);
            lessons.push(lessonName);
            console.log("endddddddd 1111111111" + lessonName);
        })
        //}
        //b();

        console.log("endddddddd " + lessons);
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

