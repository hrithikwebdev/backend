const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hrithik@8578",
    database: "student_db"
});

db.connect((err) => {
    if(err){
        console.log(`DB Error: ${err}`);
    }else{
        console.log("MySQL is Connected..");
    }
});

module.exports = db;