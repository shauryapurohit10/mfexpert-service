const express = require('express');
const router = express.Router();
const createUserRoute = require('./create-user');
const healthRoute = require('./health');
const getUsersRoute = require('./get-user');
const updateUserRoute = require('./update-user');
const deleteUserRoute = require('./delete-user');
const addmemberRoute = require('./add-member');
const loginuserRoute = require('./login-user');


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




module.exports = router;
