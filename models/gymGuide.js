module.exports = (sequelize, DataTypes) => {
    const GymGuide = sequelize.define(
      "gymGuide",
      {
        gmail: { 
                    type: DataTypes.STRING(30),
                    primaryKey: true,
                    allowNull: false
                  },
        phoneNum: { 
                    type: DataTypes.STRING(30),
                    allowNull: false
                  },
         firstName: { 
                    type: DataTypes.STRING(30),
                    allowNull: false
                  },
         lastName: { 
                    type: DataTypes.STRING(30),
                    allowNull: false
                  },
      },
      {
        timestamps: false,
    }
    );
    return GymGuide;
  };
  