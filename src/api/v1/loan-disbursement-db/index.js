const express = require('express');
const validate = require('express-validation');
const controller = require('./loanDisbursementDbUser.controller');
const validation = require('./loanDisbursementDbUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loanDisbursementDbUser), controller.loanDisbursementDbUser);

module.exports = router;