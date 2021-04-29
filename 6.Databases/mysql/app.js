const db = require("./connection");

//                                       variable  Statement to insert
db.query(`INSERT INTO ACTORS (name, height) VALUES(?, ?);`, ["Peter Griffin", 10], (error, result, fields) => {
    if (error) {
        throw error;
    }
    console.log(result);
    //console.log(fields);
});