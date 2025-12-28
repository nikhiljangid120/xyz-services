const sqlite3 = require('sqlite3').verbose();
const Datastore = require('nedb');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const sqliteDbPath = path.join(dataDir, 'contacts.sqlite');
const sqliteDb = new sqlite3.Database(sqliteDbPath, (err) => {
    if (err) {
        console.error('Error opening SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        sqliteDb.run(`CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            subject TEXT,
            message TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

const nedb = new Datastore({ filename: path.join(dataDir, 'contacts.db'), autoload: true });
console.log('Connected to NeDB database.');

module.exports = { sqliteDb, nedb };
