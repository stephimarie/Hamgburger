const connection = require("../Configure/connection.js");

// Helper function for SQL syntax.

function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    let arr = [];
// loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];

// check to skip hidden properties
if (Object.hasOwnProperty.call(ob, key)) {
    
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
    
    arr.push(key + "=" + value);
  }
}

// translate array of strings to a single comma-separated string
return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
    all(tableInput, cb) {
      let queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    create(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
    
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
    
        console.log(queryString);
    
        connection.query(queryString, vals, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

// An example of objColVals 
    update(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
            });
    }
};

// Export the orm object for the model.
module.exports = orm;
