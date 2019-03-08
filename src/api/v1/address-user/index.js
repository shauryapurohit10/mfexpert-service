const express = require('express');
const validate = require('express-validation');
const controller = require('./addressUser.controller');
const validation = require('./addressUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.addressUser), controller.addressUser);

module.exports = router;