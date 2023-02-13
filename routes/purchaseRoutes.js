const express = require('express')
const router = express.Router()
const purchaseController = require('../controllers/purchaseController')


router.route('/')
    .get(purchaseController.getAllPurchases)
    .post(purchaseController.createNewPurchase)
    .put(purchaseController.updateNumEnterById)
// .patch(purchaseController.UpdateNumEnterById)

router.route('/:id')
    .get(purchaseController.getAllPurchasesByMemberId)
module.exports = router

