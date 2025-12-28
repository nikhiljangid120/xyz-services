const express = require('express');
const router = express.Router();
const { sqliteDb, nedb } = require('../config/database');

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const newContact = {
        name,
        email,
        subject: subject || 'No Subject',
        message,
        timestamp: new Date()
    };

    const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    sqliteDb.run(sql, [newContact.name, newContact.email, newContact.subject, newContact.message], function (err) {
        if (err) {
            console.error('SQLite Error:', err.message);
        } else {
            console.log(`Saved to SQLite with ID: ${this.lastID}`);
        }
    });

    nedb.insert(newContact, (err, doc) => {
        if (err) {
            console.error('NeDB Error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Saved to NeDB:', doc._id);

        return res.status(201).json({ message: 'Message sent successfully!', id: doc._id });
    });
});

module.exports = router;