const express = require('express');
const validate = require('express-validation');
const controller = require('./loan.controller');
const validation = require('./loan.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loan), controller.loan);

module.exports = router;