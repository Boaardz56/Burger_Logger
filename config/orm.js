// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function(burger_name, cb) {
      connection.query("INSERT INTO burgers SET ?", 
      {
        burger_name: burger_name,
        devoured: false,
      },
      function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(burgerID, cb) {
    connection.query("UPDATE burgers SET ? WHERE ?",
      [
        { devoured: true },
        { id: burgerID }
      ],
      function(err, result) {
      if (err) throw err;

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
