const mysql = require('mysql2/promise');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let pool;

async function initConnection() {
    try {
        pool = mysql.createPool(dbconfig);
       // console.log('db conectada !!!');
    } catch (err) {
        console.log('[db err]', err);
        setTimeout(initConnection, 2000); // tiempo de reconexión  2000ms
    }
}

initConnection();

async function query(sql, params) {
    const [rows] = await pool.execute(sql, params);
    return rows;
}

module.exports = {
    query
};
