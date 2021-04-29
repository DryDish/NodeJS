//node connection.js --createdb whatever 1 2 3 4 5
console.log(process.argv);
require('dotenv').config();
// printout: 'whatever', '1', '2', '3', '4', '5'

// I'm running this file with node connection.js --createdb
// If the user ran the file with "--createdb" option then console log "success"
// hint: use argv

//require("./secretPassword.json").password;



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
 
console.log(process.env.DB_PASSWORD); // prints the password in the .env file


connection.connect();
 
if (process.argv.includes("--createdb")) {
    console.log("success");
    connection.query(`CREATE TABLE IF NOT EXISTS movies (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), height INT)`,
     (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
    })
}

module.exports = {
  connection
};

/*
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 */
connection.end();