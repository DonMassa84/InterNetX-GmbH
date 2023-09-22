const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'internetx.cjnu4a2l439i.eu-central-1.rds.amazonaws.com',
    user: 'maxtrustworth',
    password: 'MaxTrustworth123#',
    database: 'internetx'
});

module.exports = db;

