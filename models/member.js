module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "member",
    {
      gmail: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      phoneNum: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      ImgPath: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      DateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
  return Member;
};
