const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Importieren der API-Routen
const signinRoute = require('./api/auth/signin');
const selectOneRoute = require('./api/query/select-one');
const deleteItemsRoute = require('./api/tables/delete-items');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Datenbankverbindung
const db = mysql.createConnection({
    host: 'localhost',
    user: 'id21243083_maxtrustworth',
    password: 'MaxTrustworth123#',
    database: 'id21243083_internetx'
});

db.connect((err) => {
    if (err) {
        console.error('Fehler bei der Verbindung zur Datenbank:', err);
        return;
    }
    console.log('Erfolgreich mit der Datenbank verbunden.');
});

// Routen
app.use('/user', signinRoute);
app.use('/user', selectOneRoute);
app.use('/user', deleteItemsRoute);

// Serverstart
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});


