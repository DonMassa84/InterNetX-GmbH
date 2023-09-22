/**
* @api {get} Request select one
* @apiName selectOne
* @apiDescription Request to select one
* @apiGroup sql
*
* @apiParam {String} table selected table.
* @apiParam {String} condition condition information.
* @apiParam {String} field selected field.
* @apiParamExample {json} Request-Example:
*     {
*        "table": 'user',
*        "condition": 'WHERE id=2',
*        "field": 'name'
*     }
*
*/
const express = require('express');
const router = express.Router();
const db = require('../db.js');
const bcrypt = require('bcrypt');

router.get('/user/:email', (req, res) => {
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
        delete user.password_hash;
        delete user.salt;
        res.json(user);
    });
});

module.exports = router;


