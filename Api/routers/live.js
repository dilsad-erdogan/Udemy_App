const express = require('express');
const router = express.Router();
const { getLive, getLiveByUser, getLiveByLive, addLive, deleteLive, updateTitle, updateDescription, updatePng } = require('../controllers/live');

router.route('/get').get(getLive);
router.route('/byUser/:id').get(getLiveByUser);
router.route('/byLive/:id').get(getLiveByLive);
router.route('/add').post(addLive);
router.route('/delete/:id').patch(deleteLive);
router.route('/updateTitle/:id').put(updateTitle);
router.route('/updateDescription/:id').put(updateDescription);
router.route('/updatePng/:id').put(updatePng);

module.exports = router;