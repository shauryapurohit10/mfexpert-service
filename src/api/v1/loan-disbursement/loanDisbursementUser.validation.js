const Joi = require('joi');

exports.loanDisbursementUser = {
    id: Joi.number().integer().required(),
    loan_amount: Joi.number().integer().required()
};
