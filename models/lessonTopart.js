module.exports = (sequelize, DataTypes) => {
    const lessonsToPart = sequelize.define(
        "lessonToPart",
        {
            lessonToPartId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            partCode: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            lessonCode: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            timestamps: false,
        }
    );
    return lessonsToPart;
};
