const express = require('express');
const router = express.Router();
const { getUserRole, getUserRoleById, addUserRole, deleteUserRole, updateUserRole } = require('../controllers/role');

router.route('/get').get(getUserRole);
router.route('/byId/:id').get(getUserRoleById);
router.route('/add').post(addUserRole);
router.route('/delete/:id').patch(deleteUserRole);
router.route('/update/:id').put(updateUserRole);

module.exports = router;