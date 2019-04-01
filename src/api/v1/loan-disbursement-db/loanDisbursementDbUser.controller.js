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
exports.loanDisbursementDbUser = async (req, res, next) => {
  try {
    const params = {
      member_code: req.body.member_code,
      member_name: req.body.member_name,
      loan_amount: req.body.loan_amount,
      outstanding_amount: req.body.outstanding_amount,
      loan_type: req.body.loan_type
    }
    postgresql.loanDisbursementDbUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'loanDisbursementDbUser',
        getErrorCode(routes.loanDisbursementDbUser, services.sample, codes.loanDisbursementDbUserError),
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
