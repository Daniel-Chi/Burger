//import MySQL connection used for MySQL queries
const connection = require("./connection");

//export a few basic query functions
module.exports = {
    selectAll: function (tableToSelectFrom, callback) {
        connection.query("SELECT * FROM ??", tableToSelectFrom,
            function (err, data) {
                if (err) throw err;
                callback(data);
            });
    },
    insertOne: function (tableToInsertInto, columnToGiveValue, valueGivenToColumn, callback) {
        connection.query("INSERT INTO ?? (??) VALUES (??)", [tableToInsertInto, columnToGiveValue, valueGivenToColumn],
            function (err, data) {
                if (err) throw err;
                callback(data);
            });
    },
    updateOne: function (tableToUpdate, columnToUpdate, newColumnValue, columnToIdentify, ID, callback) {
        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [tableToUpdate, columnToUpdate, newColumnValue, columnToIdentify, ID],
            function (err, data) {
                if (err) throw err;
                callback(data);
            });
    },
};