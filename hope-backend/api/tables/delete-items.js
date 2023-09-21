const express = require('express');
const router = express.Router();
const db = require('../db.js');
const bcrypt = require('bcrypt');

router.delete('/user/:email', (req, res) => {
    const email = req.params.email;
    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({ message: 'Authentifizierung erforderlich' });
    }

    const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(500).json({ error: 'Benutzer nicht gefunden' });
        }

        const user = results[0];
        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (username !== email || !validPassword) {
            return res.status(401).json({ message: 'Ungültige Authentifizierungsdaten' });
        }

        if (!user.admin) {
            return res.status(403).json({ message: 'Nur Admins können Benutzer löschen' });
        }

        const deleteQuery = 'DELETE FROM users WHERE email = ?';
        db.query(deleteQuery, [email], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Fehler beim Löschen des Benutzers' });
            }
            res.json({ message: 'Benutzer erfolgreich gelöscht' });
        });
    });
});

module.exports = router;

