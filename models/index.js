const { Sequelize } = require('sequelize');
const { sequelize } = require('./sequelize');
const { applyExtraSetup } = require('./extra-setup');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
//********************MODELS*************************//
db.lessons = require('./lesson');
db.prices = require('./price');
db.purchases = require('./purchase');
db.measurements = require('./measurement');
<<<<<<< HEAD
db.gymGuides = require('./gymguide');
db.activeTypes = require('./activeType');
db.schedules = require('./schedule');
db.participations = require('./participation');
=======
db.users = require('./user');
db.gymGuides = require('./gymguide');
db.activeTypes = require('./activeType');
db.schedules = require('./schedule');
db.participation=require('./participation');
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
db.bodyParts = require('./bodyPart');
db.exercisesToParts = require('./exerciseToPart');
db.gymNastics = require('./gymnastic');
db.lessonsToPart = require('./lessonTopart');

//********************END MODELS*********************//
applyExtraSetup();

<<<<<<< HEAD
db.sequelize.sync({ alter: true })
=======
db.sequelize.sync({ force: true })
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
    .then(() => {
        console.log('yes re-sync done!')
    })
module.exports = db