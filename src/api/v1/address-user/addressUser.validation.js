const Joi = require('joi');

exports.addressUser = {
  body: Joi.object().keys({
    add1: Joi.string().required(),
    add2: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    pcode: Joi.string().required()
  })
};
