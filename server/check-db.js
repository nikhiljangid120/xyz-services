const sqlite3 = require('sqlite3').verbose();
const Datastore = require('nedb');
const path = require('path');

console.log('--- XYZ Backend Verification ---\n');

// Database is stored in server/data/
const dataDir = path.join(__dirname, 'data');

// 1. Check SQLite
const dbPath = path.join(dataDir, 'contacts.sqlite');
console.log(`Checking SQLite Database at: ${dbPath}`);

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('❌ SQLite Connection Error:', err.message);
        console.log('   (Note: Database is created in "server/data/" folder)');
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

// 2. Check NeDB
const nedbPath = path.join(dataDir, 'contacts.db');
console.log(`\nChecking NeDB Database at: ${nedbPath}`);
// NeDB datastore expects a filename, but we are just reading, so autoload is fine.
// However, NeDB uses an append-only file format. Standard text read is often safer for quick checks, 
// but let's use the library to be proper.
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
