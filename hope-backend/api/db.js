const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'id21243083_maxtrustworth',
  password: 'MaxTrustworth123#',
  database: 'id21243083_internetx'
});

db.connect((err) => {
  if (err) {
    console.error('Fehler beim Verbinden mit der Datenbank:', err);
    return;
  }
  console.log('Erfolgreich mit der Datenbank verbunden');
});

module.exports = db;
