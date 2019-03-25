const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');
const { generateError } = require('../../../utils/APIError');
const {
  routes,
  services,
  codes,
  getErrorCode
} = require('../../../utils/ErrorCode');

/**
 * createUser
 * @public
 */
exports.loan = async (req, res, next) => {
  try {
    const params = {
      application_code: req.body.application_code,
      member_code: req.body.member_code,
      member_name: req.body.member_name,
      mobile_number: req.body.mobile_number,
      product: req.body.product,
      expected_disbursment_date: req.body.expected_disbursment_date,
      loan_amount: req.body.loan_amount,
      purpose: req.body.purpose,
      rate_of_interest: req.body.rate_of_interest,
      approve_status: req.body.approve_status,
      reject_status: req.body.reject_status
    }
    postgresql.loan(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'loan',
        getErrorCode(routes.loan, services.sample, codes.loanError),
        error.message,
        {
        }
      );
      errorMsg.status = httpStatus.BAD_REQUEST;
      return next(errorMsg);
    })
  } catch (ex) {
    return next(ex)
  }
};
