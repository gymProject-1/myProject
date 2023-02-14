const db = require('../models/index')
const Purchases = db.purchases

class PurchasesDataAccessor {
    // Get all purchases from DB
    getAllPurchases = async () => {
        const purchases = await Purchases.findAll({})
        return purchases;
    }

    getPurchasesByMemberId = async (id) => {
        const purchases = await Purchases.findAll({ where: { memberId: id } });
        return purchases;
    }

    createNewPurchase = async (memberId, type, numEnters, startDate) => {
        const purchase = await Purchases.create({ memberId, type, numEnters, startDate });
    }

    updateNumEnterById = async (numEnter, _purchaseId) => {
      //  const purchases= await Purchases.findAll({ where: { memberId: id },order:[['dateLesson','DESC']]})
        const purchase = await Purchases.update({ numEnters: numEnter }, { where: { purchaseId: _purchaseId } })
        return purchase;
    }
}

const purchasesDataAccessor = new PurchasesDataAccessor();
module.exports = purchasesDataAccessor;
