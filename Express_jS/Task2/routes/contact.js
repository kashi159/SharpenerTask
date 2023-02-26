const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const contactController = require('../controllers/contact')
// /admin/add-product => GET
router.get('/contact', contactController.getcontact);

// /admin/add-product => POST
router.post('/contact',contactController.postContact);

module.exports = router;