const Mysql = require('mysql')

const conn = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "easygo"
});
  
conn.connect((err) => err ? console.log(err) : console.log('Connected to database'))
module.exports = conn