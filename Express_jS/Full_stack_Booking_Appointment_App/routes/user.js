const express = require('express');
const router = express.Router();

const userController = require('../controller/user')

router.get('/', userController.getUsers);
router.post('/user', userController.postUser);
router.delete('/delete/:id', userController.postDeleteUser)

module.exports = router;
