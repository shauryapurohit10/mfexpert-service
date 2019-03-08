const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  addmember,
  loginUser

} = require('./postgresqldb');

module.exports = {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  addmember,
  loginUser
};
