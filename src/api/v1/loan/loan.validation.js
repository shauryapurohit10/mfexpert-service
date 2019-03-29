const Joi = require('joi');

exports.loan = {
  body: Joi.object().keys({
    application_code: Joi.string().required(),
    member_code: Joi.string().required(),
    member_name: Joi.string().required(),
    mobile_number: Joi.string().required(),
    product: Joi.string().required(),
    expected_disbursment_date: Joi.string().required(),
    loan_amount: Joi.number().integer().required(),
    purpose: Joi.string().required(),
    rate_of_interest: Joi.number().integer().required(),
    approve_status: Joi.number().integer().required(),
    reject_status: Joi.number().integer().required()

  })
};
