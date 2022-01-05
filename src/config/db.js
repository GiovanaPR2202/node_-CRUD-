const mysql = require('mysql2');
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path:path.join(__dirname,'../.env')})

const db = mysql.createPool({
    connectionLimit: 10,
    localAddress: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: 3306

})

db.query("SELECT name FROM users",(err,result)=>{
    if(err) throw err;
})




module.exports = db;


