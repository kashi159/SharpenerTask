const express = require('express');
const router = express.Router();

const forgetPasswordController = require('../controller/forgetPassword');

router.post('/password/forgotpassword', forgetPasswordController.postForgetPassword);


module.exports = router;