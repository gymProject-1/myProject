module.exports = (sequelize, DataTypes) => {
    const Measurement = sequelize.define(
      "measurement",
      {
        weight: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        measureDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
          member_id: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          //fk in phsical
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          WaistCircumference: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          HipCircumference: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
      },
      {
        timestamps: false,
    }
    );
    return Measurement;
  };
  