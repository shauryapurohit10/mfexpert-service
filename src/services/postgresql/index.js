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
  loanDisbursementUser,
  loanDisbursementDbUser,

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
  loanDisbursementUser,
  loanDisbursementDbUser
};

