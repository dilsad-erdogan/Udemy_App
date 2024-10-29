const express = require('express');
const router = express.Router();
const { getUser, deleteUser, updateRole, updateName, updateEmail, updatePassword } = require('../controllers/user');

router.route('/get').get(getUser);
router.route('/delete/:id').patch(deleteUser);
router.route('/updateRole/:id').put(updateRole);
router.route('/updateName/:id').put(updateName);
router.route('/updateEmail/:id').put(updateEmail);
router.route('/updatePassword/:id').put(updatePassword);

module.exports = router;