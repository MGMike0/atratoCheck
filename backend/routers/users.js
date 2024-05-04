const express = require('express')
const router = express.Router();
const userModule = require('../modules/users')

router.get('/', userModule.getUsers);
router.post('/', userModule.addUser);

module.exports = router