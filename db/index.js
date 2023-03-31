/*
Why useExpressMiddleware this file when you can useExpressMiddleware sequelize for raw queries...
 */
const pgp = require('pg-promise')();
// const fs = require("fs");


const connectionConfig = {
    connectionString: "postgres://postgres:013107Kc$@localhost:5432/Callsign",
    ssl: true,
};

/*
const connectionConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true,
        rejectUnauthorized: false,
    }, 
};
*/
const db = pgp(connectionConfig);
// const db = pgp(connectionConfig);

// const db = pgp('postgres://postgres:root@localhost:5432/csc667-db');

module.exports = db;