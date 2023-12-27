'use strict';

require('dotenv').config();
const mysql = require('mysql2');

const access = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
};

const dataBase = mysql.createConnection(access);
dataBase.connect((err) => {
  if (err) {
    console.error('Database connection error ' + err.stack);
    return;
  }
  console.log('Connected to database from id ' + dataBase.threadId);
});

module.exports = dataBase;

