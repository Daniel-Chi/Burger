//this file sets up and exports MySQL database connection

let mysql = require("mysql");

//local MySQL connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

//deployed app MySQL connection
if (process.env.PORT) {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        user: "bf8be166cf67ab",
        password: "428e9d75",
        database: "heroku_bdbd6fb3e3406ba"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//ONLY FOR FIRST-TIME TABLE SETUP ON HEROKU
// if (process.env.PORT) {
//     connection.query("CREATE TABLE burgers ("
//         + "id INTEGER AUTO_INCREMENT,"
//         + "burger_name VARCHAR(30) NOT NULL,"
//         + "devoured BOOLEAN DEFAULT FALSE,"
//         + "PRIMARY KEY (id)"
//         +");", function(err, data){
//             console.log("Error (if any): " + err);
//         });
// };

module.exports = connection;