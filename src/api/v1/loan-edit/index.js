const express = require('express');
const validate = require('express-validation');
const controller = require('./loanEditUser.controller');
const validation = require('./loanEditUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loanEditUser), controller.loanEditUser);

module.exports = router;