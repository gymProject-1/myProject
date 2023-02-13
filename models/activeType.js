module.exports = (sequelize, DataTypes) => {
    const ActiveType = sequelize.define(
      "activeType",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
      },
      {
        timestamps: false,
    }
    );
    return ActiveType;
  };
  