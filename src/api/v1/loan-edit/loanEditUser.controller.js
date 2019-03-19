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
exports.loanEditUser = async (req, res, next) => {
  try {
    const params = req.body
    postgresql.loanEditUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'loanEditUser',
        getErrorCode(routes.loanEditlUser, services.sample, codes.loanEditlUser),
        error.message,
        {
        }
      );
      errorMsg.status = httpStatus.BAD_REQUEST;
      throw errorMsg;
    })
  } catch (ex) {
    return next(ex)
  }
};

