const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  addmember,
  getMembers,
  loginUser,
  kycUser,
  addressUser,
  loan

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
  addressUser,
  loan
};
