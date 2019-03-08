const Joi = require('joi');

exports.kycUser = {
  body: Joi.object().keys({
    pnumber: Joi.string().required(),
    adnumber: Joi.string().required(),
    fname: Joi.string().required(),
    phnumber: Joi.string().required(),
    mail: Joi.string().required(),
    mnumber: Joi.string().required()
  })
};
