module.exports = (sequelize, DataTypes) => {
    const exercisesToParts = sequelize.define(
        "exerciseToParts",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            partCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            exerciseCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
    return exercisesToParts;
};
