const express = require('express');
const router = express.Router();

const userController = require('../controller/user')

router.get('/', userController.getUsers);
router.get('/user/:id', userController.getUser)
router.post('/user', userController.postUser);
router.delete('/delete/:id', userController.postDeleteUser);
router.put('/edit/:id', userController.postEditUser)

module.exports = router;
