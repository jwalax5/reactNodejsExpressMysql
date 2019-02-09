const mysql = require('mysql');


const connection = mysql.createConnection({
    connectionTimeout : 10000,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

module.exports = connection;
