var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    getAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(tableName, cName, values, cb) {
        var queryString = " INSERT INTO " + tableName;
         queryString += " (";
        queryString += cName.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }


}


module.exports = orm;
