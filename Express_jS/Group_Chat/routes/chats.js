const express = require('express');
const router = express.Router();
const fs = require('fs')
const chatController = require('../controller/chat')

router.get('/', chatController.getChat);

// /admin/add-product => POST
router.post('/',chatController.postChat);


module.exports = router;