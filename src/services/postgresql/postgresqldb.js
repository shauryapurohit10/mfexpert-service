const Sequelize = require('sequelize');
const config = require('../../config/config.js')
var knex = require('knex')

 let dbconnection;

function GetDBConnection() {
  if (dbconnection !== undefined) {
    return dbconnection;
  } else {
    var _knex = knex({
      client: "pg",
      version: "9.5.14",
      connection:  {
        host : config.host,
        user : config.username,
        password : config.password,
        database : config.database
      }
    });
    return _knex;
  }
}

function GetDBDisconnection(_knex) {
  if (_knex !== null) {
    _knex.destroy();
  }
  dbconnection = undefined;
}


/**
 * create user into the users table
 *
 * @param  {String} username
 */

exports.createUser = async (payload) => {
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("login").insert(payload)
      .then(success => {
        resolve("successfully inserted.");
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

  /**
 * get user data from the users table
 * 
 *
 * @param  {String} username
 */
exports.getUsers = async (payload) => {
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").select('id', 'username')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};

/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.updateuser = async (payload) => {
 
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .update({ 'username': payload.username, 'password': payload.password })
      .then(success => {
        if (success) {
          resolve("updated sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.deleteUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .del()
      .then(success => {
        if (success) {
          resolve("deleted sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

// getMembers
exports.getMembers = async (payload) => {
  var dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("member").select('Name', 'Mobile_Number')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};



/**
 * create user into the users table
 *
 * @param  {String} username
 */

exports.loginUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();

  return new Promise(async (resolve, reject) => {
    dbconnection("login").select('id').where({ username: payload.username, password: payload.password })
      .then(success => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * addmember into the addmember table
 *
 * @param  {String} username
 */

exports.addmember = async (payload) => {
  dbconnection = undefined; 
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("addmember").insert(payload)
      .then(success => {
        resolve("successfully inserted.");
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * create address into the address table
 *
 * 
 * 
 */

exports.addressUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();

  return new Promise(async (resolve, reject) => {
    dbconnection("address").insert(payload)
      .then(success => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * create kycuser into the kyc table
 *
 * 
 * 
 */

exports.kycUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();

  return new Promise(async (resolve, reject) => {
    dbconnection("kyc").insert(payload)
      .then(success => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

/**
 * Apply for a Loan into the Loan table
 *
 * @param  {String} username
 */

exports.loan = async (payload) => {
  dbconnection = undefined;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("loan").insert(payload)
      .then(success => {
        resolve("successfully inserted.");
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

// loanApprovalUser
exports.loanApprovalUser = async (payload) => {
    dbconnection = undefined;
    var dbconnection = GetDBConnection();
    return new Promise(async (resolve, reject) => {
    dbconnection("loan").select('application_code', 'member_code','member_name','loan_amount')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
}

// loanEditUser
exports.loanEditUser = async (payload) => {
  dbconnection = undefined;
  var dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
  dbconnection("loan").select('loan_amount')
      .then(success => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
})
}