const { sequelize } = require("./sequelize");


const applyExtraSetup = () => {
    const { purchase, price, exerciseToParts, bodyPart, gymnastics, lessonToPart, lesson, measurement, member, participation, schedule, gymGuide, activeType } = sequelize.models;
    purchase.belongsTo(price, { foreignKey: "id", as: "priceType" });
    purchase.belongsTo(member, { foreignKey: "gmail", as: "memberId" });
    exerciseToParts.belongsTo(bodyPart, { foreignKey: "id", as: "bodyPart" });
    exerciseToParts.belongsTo(gymnastics, { foreignKey: "id", as: "exerciseCode" });
    lessonToPart.belongsTo(bodyPart, { foreignKey: "id", as: "bodyPart" });
    lessonToPart.belongsTo(lesson, { foreignKey: "id", as: "lessonCode" });
    measurement.belongsTo(member, { foreignKey: "gmail", as: "memberId" });
    //3-????
    // participation.belongsTo(member, { foreignKey: "gmail", as: "memberId" });
    // participation.belongsTo(gymGuide, { foreignKey: "gmail", as: "guiedId" });
    // participation.belongsTo(lesson, { foreignKey: "id", as: "lessonCode" });
    //
    schedule.belongsTo(lesson, { foreignKey: "id", as: "lessonCode" });
    schedule.belongsTo(activeType, { foreignKey: "id", as: "activityType" });
    schedule.belongsTo(gymGuide, { foreignKey: "gmail", as: "guiedId" });
};
module.exports = { applyExtraSetup };
