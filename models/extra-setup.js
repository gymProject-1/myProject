const { sequelize } = require("./sequelize");

// const applyExtraSetup = () => {
//   const { book, author, category } = sequelize.models;
//   book.belongsTo(category, { foreignKey: "cateogry_id", as: "category" });
//   book.belongsTo(author, { foreignKey: "author_id", as: "author" });
//   author.hasMany(book, { foreignKey: "author_id", as: "books" });
//   category.hasMany(book, { foreignKey: "cateogry_id", as: "books" });
// };



const applyExtraSetup = () => {
//const { members } = sequelize.models;
const { purchase,price} = sequelize.models;
console.log(purchase)
//purchases.belongsTo(members,{ foreignKey:"gmail",as :"memberId" });
//prices.belongsTo(purchases,{ foreignKey:"id",as :"type" });


//  book.belongsTo(author);
// author.hasMany(book);
// category.hasMany(book);
};
module.exports = { applyExtraSetup };
