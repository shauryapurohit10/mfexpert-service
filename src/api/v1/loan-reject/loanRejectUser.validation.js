const Joi = require('joi');

exports.loanRejectUser = {
    id: Joi.number().integer().required(),
    reject_status: Joi.number().integer().required()
};
