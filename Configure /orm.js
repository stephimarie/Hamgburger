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
