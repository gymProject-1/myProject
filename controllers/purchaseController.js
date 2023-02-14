



const purchaseDal = require("../dal/purchase-DB-acssessor");


class PurchasesController {

    getAllPurchases = async (req, res) => {

        const purchases = await purchaseDal.getAllPurchases();
        if (!purchases?.length) {
            return res.status(400).json({ message: 'No purchases found' })

        }
        res.json(purchases + purchases.purchaseId)
    }

    getAllPurchasesByUserId = async (req, res) => {
        const purchases = await purchaseDal.getPurchasesByUserId(req.params.id);
        if (!purchases?.length) {
            return res.status(400).json({ message: 'No purchase found' })
        }
        res.json(purchases)
    }
    createNewPurchase = async (req, res) => {
        const { userId, numEnters, type, startDate } = req.body

        if (!userId || !numEnters || !type || !startDate)
            return res.status(400).json({ message: 'All fields are required' })

        const purchase = await purchaseDal.createNewPurchase(userId, type, numEnters, startDate)

        if (purchase)
            return res.status(400).json({ message: 'Invalid purchase data received' })
        return res.status(201).json({ message: 'New purchase created' })

    }
    updateNumEnterById = async (req, res) => {

        const { userId, numEnters } = req.body
        // Confirm data
        if (!userId || !numEnters)
            return res.status(400).json({ message: 'All fields are required' })

        const purchases = await purchaseDal.getPurchasesByUserId(userId);
        if (!purchases?.length) {
            return res.status(400).json({ message: 'No purchase found' })
        }
       // purchases.forEach(purchase => {
// if( purchase.startDate )
//         });Date.now

//         return res.status(400).json({ message: 'purchase not found' })


    }




}

const purchasesController = new PurchasesController();
module.exports = purchasesController;

