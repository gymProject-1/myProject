const { sequelize } = require("./sequelize");


const applyExtraSetup = () => {
  const { purchase, price, exerciseToParts, bodyPart, gymnastics, lessonToPart, lesson, measurement, member, participation, schedule, gymGuide, activeType } = sequelize.models;
  purchase.belongsTo(price, { foreignKey: "type", as: "priceType" });
  purchase.belongsTo(member, { foreignKey: "memberId", as: "member_Id" });
  exerciseToParts.belongsTo(bodyPart, { foreignKey: "partCode", as: "bodyPart" });
  exerciseToParts.belongsTo(gymnastics, { foreignKey: "exerciseCode", as: "exercise_Code" });
  //not good:
  lessonToPart.belongsTo(bodyPart, { foreignKey: "partCode", as: "bodyPart" });
  lessonToPart.belongsTo(lesson, { foreignKey: "lessonCode", as: "lesson_Code" });
  measurement.belongsTo(member, { foreignKey: "gmail", as: "memberId" });
  //3-????
  //participation.belongsTo(member, { foreignKey: "gmail", as: "memberId" });
  // participation.belongsTo(gymGuide, { foreignKey: "gmail", as: "guiedId" });
  // participation.belongsTo(lesson, { foreignKey: "id", as: "lessonCode" });

  schedule.belongsTo(lesson, { foreignKey: "LessonType", as: "lessonCode" });
  schedule.belongsTo(activeType, { foreignKey: "ActiveType", as: "activityType" });
  schedule.belongsTo(gymGuide, { foreignKey: "guiedId", as: "guied_Id" });
};
module.exports = { applyExtraSetup };
