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
 * getUsers
 * @public
 * 
 */
exports.loanDisbursementUser = async (req, res, next) => {
  try {
    postgresql.loanDisbursementUser().then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'loanDisbursementUser',
        getErrorCode(routes.loanDisbursementUser, services.sample, codes.loanDisbursementUser),
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

