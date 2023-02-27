const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();
const shopController = require('../controllers/shop')

router.get('/', shopController.getShop);


module.exports = router;