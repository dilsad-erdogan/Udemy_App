const express = require('express');
const router = express.Router();
const { getVideo, getVideoByUser, getVideoByVideo, addVideo, deleteVideo, updateTitle, updateDescription, updatePng, updateUrl, updatePrice } = require('../controllers/video');

router.route('/get').get(getVideo);
router.route('/byUser/:id').get(getVideoByUser);
router.route('/byVideo/:id').get(getVideoByVideo);
router.route('/add').post(addVideo);
router.route('/delete/:id').patch(deleteVideo);
router.route('/updateTitle/:id').put(updateTitle);
router.route('/updateDescription/:id').put(updateDescription);
router.route('/updatePng/:id').put(updatePng);
router.route('/updateUrl/:id').put(updateUrl);
router.route('/updatePrice/:id').put(updatePrice);

module.exports = router;