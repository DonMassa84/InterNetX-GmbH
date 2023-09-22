const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'internetx.cjnu4a2l439i.eu-central-1.rds.amazonaws.com',
    user: 'maxtrustworth',
    password: 'MaxTrustworth123#',
    database: 'internetx'
});

app.post('/user', async (req, res) => {
    const { email, fname, lname, password, admin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (email, fname, lname, password, admin) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [email, fname, lname, hashedPassword, admin], (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(201).send('User created');
    });
});

app.get('/user/:email', (req, res) => {
    // Implement Basic Auth and retrieve user data based on email
});

app.delete('/user/:email', (req, res) => {
    // Implement Basic Auth, check for admin status, and delete user based on email
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});



