const mysql = require('mysql2');
const dotenv = require('dotenv')
const path = require('path')

//dotenv.config({path:path.join(__dirname,'../.env')})

const db = mysql.createPool({
    connectionLimit: 10,
    localAddress: 'localhost',//process.env.DB_HOST,
    user:'root', //process.env.DB_USER,
    password: '123456',//process.env.DB_PASS,
    database: 'node_test',//process.env.DB_DATABASE,
    port: 3306

})

db.query("SELECT name FROM users",(err,result)=>{
    if(err) throw err;
})




module.exports = db;


