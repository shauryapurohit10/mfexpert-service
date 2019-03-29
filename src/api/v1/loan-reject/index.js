const express = require('express');
const validate = require('express-validation');
const controller = require('./loanRejectUser.controller');
const validation = require('./loanRejectUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loanRejectUser), controller.loanRejectUser);

module.exports = router;