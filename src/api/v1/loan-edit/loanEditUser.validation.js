const Joi = require('joi');

exports.loanEditUser = {
    id: Joi.number().integer().required(),
    loan_amount: Joi.number().integer().required()
};
