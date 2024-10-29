const express = require('express');
const router = express.Router();
const { getPurchase, getPurchaseByUser, addPurchase } = require('../controllers/purchase');

router.route('/get').get(getPurchase);
router.route('/byUser/:id').get(getPurchaseByUser);
router.route('/add').post(addPurchase);

module.exports = router;