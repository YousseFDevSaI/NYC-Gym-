const express = require('express');
const router = express.Router();


router.use('/user', require('../controllers/user.controller'));
router.use('/admin', require('../controllers/admin.controller'));


module.exports = router;