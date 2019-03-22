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
  loan,
  loanApprovalUser,
  loanEditUser,
  loanRejectUser,
  loanDisbursementUser

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
  loan,
  loanApprovalUser,
  loanEditUser,
  loanRejectUser,
  loanDisbursementUser
};

