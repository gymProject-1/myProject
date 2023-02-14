const db = require('../models/index')
const Purchases = db.purchases

class PurchasesDataAccessor {
    // Get all purchases from DB
    getAllPurchases = async () => {
        const purchases = await Purchases.findAll({})
        return purchases;
    }
<<<<<<< HEAD

    getPurchasesByMemberId = async (id) => {
        const purchases = await Purchases.findAll({ where: { memberId: id } });
        return purchases;
    }

    createNewPurchase = async (memberId, type, numEnters, startDate) => {
        const purchase = await Purchases.create({ memberId, type, numEnters, startDate });
=======
    getPurchasesByUserId = async (id) => {
        const purchases = await Purchases.findAll({ where: { userId: id } });
        return purchases;
    }
    
    createNewPurchase = async (userId, type, numEnters, startDate) => {
        const purchase = await Purchases.create({ userId, type, numEnters, startDate });
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
    }

    updateNumEnterById = async (numEnter, _purchaseId) => {
      //  const purchases= await Purchases.findAll({ where: { memberId: id },order:[['dateLesson','DESC']]})
        const purchase = await Purchases.update({ numEnters: numEnter }, { where: { purchaseId: _purchaseId } })
        return purchase;
    }
}

const purchasesDataAccessor = new PurchasesDataAccessor();
module.exports = purchasesDataAccessor;
