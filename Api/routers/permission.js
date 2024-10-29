const express = require('express');
const router = express.Router();
const { getPermission, getPermissionByUser, addPermission, getApprovalStatus } = require('../controllers/permission');

router.route('/get').get(getPermission);
router.route('/byUser/:id').get(getPermissionByUser);
router.route('/add').post(addPermission);
router.route('/update/:id').put(getApprovalStatus);

module.exports = router;