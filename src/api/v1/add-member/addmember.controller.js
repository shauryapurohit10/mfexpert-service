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
 * createMember
 * @public
 */
exports.addmember = async (req, res, next) => {
  try {
    const params = {
        cbname: req.body.cbname,
        group: req.body.group,
        mdate: req.body.mdate,
        aname: req.body.aname,
        gender: req.body.gender,
        mstatus: req.body.mstatus,
        alname: req.body.alname,
        monumber: req.body.monumber
    }
    postgresql.addmember(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'addmember',
        getErrorCode(routes.addmember, services.sample, codes.addmemberError),
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
