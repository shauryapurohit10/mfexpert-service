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
exports.kycUser = async (req, res, next) => {
  try {
    const params = {
        pnumber: req.body.pnumber,
        adnumber: req.body.adnumber,
        fname: req.body.fname,
        phnumber: req.body.phnumber,
        mail: req.body.mail,
        mnumber: req.body.mnumber,
    }
    postgresql.kycUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'kycUser',
        getErrorCode(routes.kycUser, services.sample, codes.kycUserError),
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
