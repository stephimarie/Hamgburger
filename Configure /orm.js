const connection = require("../Config/connection.js");
//  fix link

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