const sqlite3 = require('sqlite3').verbose();
const Datastore = require('nedb');
const path = require('path');

console.log('--- XYZ Backend Verification ---\n');

const dataDir = path.join(__dirname, 'data');
const dbPath = path.join(dataDir, 'contacts.sqlite');

console.log(`Checking SQLite Database at: ${dbPath}`);

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('❌ SQLite Connection Error:', err.message);
    } else {
        console.log('✅ SQLite Connected.');
        db.all("SELECT * FROM contacts ORDER BY id DESC LIMIT 5", [], (err, rows) => {
            if (err) {
                console.error('❌ Query Error:', err.message);
            } else {
                console.log(`\nSQLite Records (Last 5):`);
                if (!rows || rows.length === 0) console.log("   (No records found yet)");
                else {
                    rows.forEach((row) => {
                        console.log(`   [${row.id}] ${row.name} (${row.email}) - ${row.subject}`);
                    });
                }
            }
        });
    }
});

const nedbPath = path.join(dataDir, 'contacts.db');
console.log(`\nChecking NeDB Database at: ${nedbPath}`);
const nedb = new Datastore({ filename: nedbPath, autoload: true });

nedb.find({}).sort({ timestamp: -1 }).limit(5).exec((err, docs) => {
    if (err) {
        console.error('❌ NeDB Error:', err);
    } else {
        console.log('✅ NeDB Connected.');
        console.log(`\nNeDB Records (Last 5):`);
        if (!docs || docs.length === 0) console.log("   (No records found yet)");
        else {
            docs.forEach((doc) => {
                console.log(`   [${doc._id}] ${doc.name} (${doc.email}) - ${doc.subject}`);
            });
        }
        console.log('\n--- Verification Complete ---');
    }
});
