const { sequelize } = require("./sequelize");


const applyExtraSetup = () => {
//const { members } = sequelize.models;
const {purchase, price} = sequelize.models;

//purchases.belongsTo(members,{ foreignKey:"gmail",as :"memberId" });
purchase.belongsTo(price,{foreignKey:"type",as :"type_price" });

//  book.belongsTo(author);
// author.hasMany(book);
// category.hasMany(book);
};
module.exports = { applyExtraSetup };
