const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  addmember,
  loginUser,
  getMembers,
  kycUser,
  addressUser

} = require('./postgresqldb');

module.exports = {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  addmember,
  getMembers,
  loginUser,
  kycUser,
  addressUser
};

