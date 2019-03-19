const express = require('express');
const validate = require('express-validation');
const controller = require('./loanDisbursementUser.controller');
const validation = require('./loanDisbursementUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loanDisbursementUser), controller.loanDisbursementUser);

module.exports = router;