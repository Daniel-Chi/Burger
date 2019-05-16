//this file sets up and exports MySQL database connection

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "bf8be166cf67ab",
    password: "428e9d75",
    database: "heroku_bdbd6fb3e3406ba"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;