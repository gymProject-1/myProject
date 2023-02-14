const { Console } = require("console");
const { sequelize } = require("./sequelize");


const applyExtraSetup = () => {
  const { purchase, price, exerciseToParts, bodyPart, gymnastics, lessonToPart, lesson, measurement, user, participation, schedule, gymGuide, activeType } = sequelize.models;
  console.log(participation)
 
  purchase.belongsTo(price, { foreignKey: "type", as: "priceType" });
  purchase.belongsTo(user, { foreignKey: "userId", as: "user" });
  
  exerciseToParts.belongsTo(bodyPart, { foreignKey: "partCode", as: "body_Part" });
  exerciseToParts.belongsTo(gymnastics, { foreignKey: "exerciseCode", as: "exercise_Code" });
<<<<<<< HEAD
  lessonToPart.belongsTo(bodyPart, { foreignKey: "partCode", as: "bodyPart" });
=======
 
  lessonToPart.belongsTo(bodyPart, { foreignKey: "partCode", as: "body_Part" });
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
  lessonToPart.belongsTo(lesson, { foreignKey: "lessonCode", as: "lesson_Code" });
  
  measurement.belongsTo(user, { foreignKey: "userId", as: "user" });
  participation.belongsTo(user, { foreignKey: "userId", as: "user" });

  schedule.belongsTo(lesson, { foreignKey: "LessonType", as: "lessonCode" });
  schedule.belongsTo(activeType, { foreignKey: "ActiveType", as: "activityType" });
  schedule.belongsTo(gymGuide, { foreignKey: "guiedId", as: "guied" });
};
module.exports = { applyExtraSetup };
