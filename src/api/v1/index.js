const express = require('express');
const router = express.Router();
const createUserRoute = require('./create-user');
const healthRoute = require('./health');
const getUsersRoute = require('./get-user');
const updateUserRoute = require('./update-user');
const deleteUserRoute = require('./delete-user');
const addmemberRoute = require('./add-member');
const loginuserRoute = require('./login-user');
const kycuserRoute = require('./kyc-user');
const addressuserRoute = require('./address-user');
const loanRoute = require('./loan');
const loanapprovaluserRoute = require('./loan-approval-user');
const loanedituserRoute = require('./loan-edit');
const loanrejectuserRoute = require('./loan-reject');
const loandisbursementuserRoute = require('./loan-disbursement');
const loandisbursementdbuserRoute = require('./loan-disbursement-db');



/**
 * UNSECURED API
 */
router.use('/health', healthRoute);
router.use('/createuser', createUserRoute);
router.use('/getusers', getUsersRoute);
router.use('/updateuser', updateUserRoute);
router.use('/deleteuser', deleteUserRoute);
router.use('/addmember' , addmemberRoute);
router.use('/loginusers', loginuserRoute);
router.use('/kycusers', kycuserRoute);
router.use('/addressusers', addressuserRoute);
router.use('/loan', loanRoute);
router.use('/loanapprovalusers', loanapprovaluserRoute);
router.use('/loaneditusers', loanedituserRoute);
router.use('/loanrejectusers', loanrejectuserRoute);
router.use('/loandisbursementusers', loandisbursementuserRoute);
router.use('/loandisbursementdbusers', loandisbursementdbuserRoute);


module.exports = router;
