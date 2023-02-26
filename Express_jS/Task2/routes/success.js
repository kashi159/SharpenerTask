const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const successController = require('../controllers/success')

const router = express.Router();


// /admin/add-product => GET
router.get('/success', successController.getSuccess);


module.exports = router;