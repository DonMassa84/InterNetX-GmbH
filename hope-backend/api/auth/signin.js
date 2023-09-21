const express = require('express');
const router = express.Router();
const db = require('../db.js');
const bcrypt = require('bcrypt');

router.post('/user', async (req, res) => {
    const { email, fname, lname, password, admin } = req.body;

    // Hashing des Passworts
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query = 'INSERT INTO users (email, fname, lname, password_hash, salt, admin) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [email, fname, lname, hashedPassword, salt, admin], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User erfolgreich erstellt' });
    });
});

module.exports = router;

          
      
