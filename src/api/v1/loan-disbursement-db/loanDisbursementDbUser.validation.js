const Joi = require('joi');

exports.loanDisbursementDbUser = {
  body: Joi.object().keys({
    member_code: Joi.number().integer().required(),
    member_name: Joi.string().required(),
    loan_amount: Joi.number().integer().required(),
    outstanding_amount: Joi.number().integer().required(),
    loan_type: Joi.string().required()
  })
};
