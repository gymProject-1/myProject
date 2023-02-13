const { DATEONLY,YEAR } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define(
      "purchase",
      {
        purchaseId: {
           type:DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
          allowNull: false
       
        },
        memberId: {
            type: DataTypes.STRING(30),
            allowNull: false,
         // references: 'members', 
         // referencesKey: 'gmail'
 
        },
          startDate: {
      
            allowNull: false,
            type:DATEONLY
          }
         ,numEnters:
         {
            type:DataTypes.INTEGER,
            allowNull: false
         },

        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
         // references: 'prices', 
         //   referencesKey: 'id'
        },
       
      },
      {
        timestamps: false,
    }
    );
    return Purchase;
  };
  
  
  
  