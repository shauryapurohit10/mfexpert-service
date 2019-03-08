const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,

  getMembers,
  loginUser,
  kycUser,
  addressUser

} = require('./postgresqldb');

module.exports = {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  getMembers,
  loginUser,
  kycUser,
  addressUser
};
