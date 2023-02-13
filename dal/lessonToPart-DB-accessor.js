const e = require('express');
const { where } = require('sequelize');
const db = require('../models/index')
const LessonsByPart = db.lessonsToPart

class LessonsByPartDataAccessor {

   // קודי שיעורים לפי קוד אזור
    getLessonsByPart = async (partId) => {
        const lessons = await LessonsByPart.findAll({where:{id:partId}});
        // console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                 ${lessons.length}`);
        var l=[];
        lessons.forEach(e => {
            l.push(e.dataValues['id']);
            console.log("in "+e.dataValues['id']);
        });
        return lessons;
    }
}
const LessonByPartDataAccessor = new LessonsByPartDataAccessor();
module.exports = LessonByPartDataAccessor;
