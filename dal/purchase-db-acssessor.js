const db = require('../models/index')
const Purchases = db.purchases

class PurchasesDataAccessor {

    getAllPurchases = async () => {
        // Get all purchases from DB
        const purchases = await Purchases.findAll({})
        return purchases;
    }
    getPurchasesByUserId = async (id) => {
        const purchases = await Purchases.findAll({ where: { userId: id } });
        return purchases;
    }
    
    createNewPurchase = async (userId, type, numEnters, startDate) => {
        const purchase = await Purchases.create({ userId, type, numEnters, startDate });
    }

    updateNumEnterById = async (numEnter, _purchaseId) => {
        const purchase=await Purchases.update({ numEnters: numEnter }, { where: { purchaseId: _purchaseId } })
    return purchase;
    }

}

const purchasesDataAccessor = new PurchasesDataAccessor();
module.exports = purchasesDataAccessor;
