const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'henrique',
    password: '123123ae',
    database: 'sakila' });

module.exports = connection;