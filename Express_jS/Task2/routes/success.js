const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();


// /admin/add-product => GET
router.get('/success', (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});


module.exports = router;