const Joi = require('joi');

exports.addmember = {
  body: Joi.object().keys({
    cbname: Joi.string().required(),
    group: Joi.string().required(),
    mdate: Joi.string().required(),
    aname: Joi.string().required(),
    gender: Joi.string().required(),
    mstatus: Joi.string().required(),
    alname: Joi.string().required(),
    monumber: Joi.string().required()

  })
};
