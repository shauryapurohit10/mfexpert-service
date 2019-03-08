const express = require('express');
const validate = require('express-validation');
const controller = require('./addmember.controller');
const validation = require('./addmember.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.addmember), controller.addmember);

module.exports = router;