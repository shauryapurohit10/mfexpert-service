const express = require('express');
const validate = require('express-validation');
const controller = require('./kycUser.controller');
const validation = require('./kycUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.kycUser), controller.kycUser);

module.exports = router;