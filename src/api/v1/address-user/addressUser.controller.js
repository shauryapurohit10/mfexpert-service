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
exports.addressUser = async (req, res, next) => {
  try {
    const params = {
        add1: req.body.add1,
        add2: req.body.add2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pcode: req.body.pcode
    }
    postgresql.addressUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'addressUser',
        getErrorCode(routes.addressUser, services.sample, codes.addressUserError),
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
