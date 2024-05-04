const express = require('express')
const router = express.Router();
const userModule = require('../modules/users')

router.get('/', userModule.getUsers);
router.post('/', userModule.addUser);
router.put('/:id', userModule.setStatus);
router.delete('/:id', userModule.deleteUser);

module.exports = router