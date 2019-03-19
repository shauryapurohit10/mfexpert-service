const express = require('express');
const validate = require('express-validation');
const controller = require('./loanApprovalUser.controller');
const validation = require('./loanApprovalUser.validation');

const router = express.Router();

router.route('/')
  .get(validate(validation.loanApprovalUser), controller.loanApprovalUser);

module.exports = router;