



const purchaseDal = require("../dal/purchase-DB-acssessor");


class PurchasesController {

    getAllPurchases = async (req, res) => {

        const purchases = await purchaseDal.getAllPurchases();
        if (!purchases?.length) {
            return res.status(400).json({ message: 'No purchases found' })

        }
        res.json(purchases + purchases.purchaseId)
    }

    getAllPurchasesByMemberId = async (req, res) => {
        const purchases = await purchaseDal.getPurchasesByMemberId(req.params.id);
        if (!purchases?.length) {
            return res.status(400).json({ message: 'No purchase found' })
        }
        res.json(purchases)
    }
    createNewPurchase = async (req, res) => {
        const { memberId, numEnters, type, startDate } = req.body

        if (!memberId || !numEnters || !type || !startDate)
            return res.status(400).json({ message: 'All fields are required' })

        const purchase = await purchaseDal.createNewPurchase(memberId, type, numEnters, startDate)

        if (purchase)
            return res.status(400).json({ message: 'Invalid purchase data received' })
        return res.status(201).json({ message: 'New purchase created' })

    }
    updateNumEnterById = async (req, res) => {

        const { memberId, numEnters } = req.body
        // Confirm data
        if (!memberId || !numEnters)
            return res.status(400).json({ message: 'All fields are required' })

        const purchases = await purchaseDal.getPurchasesByMemberId(memberId);
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

