const express = require('express');
const router = express.Router();
const { sqliteDb, nedb } = require('../config/database');

// POST /api/contact
router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic Validation
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

    // 1. Save to SQLite
    const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    sqliteDb.run(sql, [newContact.name, newContact.email, newContact.subject, newContact.message], function (err) {
        if (err) {
            console.error('SQLite Error:', err.message);
            // Continue to NeDB even if SQLite fails? For now, yes, but log error.
        } else {
            console.log(`Saved to SQLite with ID: ${this.lastID}`);
        }
    });

    // 2. Save to NeDB
    nedb.insert(newContact, (err, doc) => {
        if (err) {
            console.error('NeDB Error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Saved to NeDB:', doc._id);

        // Use NeDB success as final confirmation to client
        return res.status(201).json({ message: 'Message sent successfully!', id: doc._id });
    });
});

module.exports = router;
