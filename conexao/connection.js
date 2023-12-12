const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '123456',
    database: 'carloca',
    port: 3306
});

module.exports  = connection;
