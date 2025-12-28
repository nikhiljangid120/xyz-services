const sqlite3 = require('sqlite3').verbose();
const Datastore = require('nedb');
const path = require('path');

console.log('--- XYZ Backend Verification ---\n');

// 1. Check SQLite
const dbPath = path.resolve(__dirname, 'server/database.sqlite');
console.log(`Checking SQLite Database at: ${dbPath}`);
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('❌ SQLite Connection Error:', err.message);
    } else {
        console.log('✅ SQLite Connected.');
        db.all("SELECT * FROM contacts ORDER BY id DESC LIMIT 5", [], (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(`\nSQLite Records (Last 5):`);
            if (rows.length === 0) console.log("   (No records found yet)");
            rows.forEach((row) => {
                console.log(`   [${row.id}] ${row.name} (${row.email}) - ${row.subject}`);
            });
        });
    }
});

// 2. Check NeDB
const nedbPath = path.resolve(__dirname, 'server/contacts.db');
console.log(`\nChecking NeDB Database at: ${nedbPath}`);
const nedb = new Datastore({ filename: nedbPath, autoload: true });

nedb.find({}).sort({ timestamp: -1 }).limit(5).exec((err, docs) => {
    if (err) {
        console.error('❌ NeDB Error:', err);
    } else {
        console.log('✅ NeDB Connected.');
        console.log(`\nNeDB Records (Last 5):`);
        if (docs.length === 0) console.log("   (No records found yet)");
        docs.forEach((doc) => {
            console.log(`   [${doc._id}] ${doc.name} (${doc.email}) - ${doc.subject}`);
        });
        console.log('\n--- Verification Complete ---');
    }
});
