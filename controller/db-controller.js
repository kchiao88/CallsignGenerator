const db = require('../db/index.js');
const dbEngine = {};

async function insertUser(username, email, first_name, last_name, password_hashed, radio_callsign) {
    const result = await db.any(
        `
        INSERT INTO "User" (username, email, first_name, last_name, password_hashed, radio_callsign) 
        VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [username, email, first_name, last_name, password_hashed, radio_callsign],
    );
    return result[0];
}
dbEngine.insertUser = insertUser;
module.exports = dbEngine;