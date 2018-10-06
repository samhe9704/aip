require('dotenv').config();

const users = require('./users');
const customers = require('./customers');
const plans = require('./plans');

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

 function seedCollection(collectionName, initialRecords) {
    MongoClient.connect(process.env.DB_CONN, (err, client) => {
        console.log('connected to mongodb...');

        const db = client.db();
        const collection = db.collection(collectionName);

        collection.remove();

        initialRecords.forEach((item) => {
            if (item.password) {
                item.password = bcrypt.hashSync(item.password, 10);
            }
        });

        collection.insertMany(initialRecords, (err, result) => {
            console.log('${result.insertedCount} records inserted.');
            console.log('closing connection...');
            client.close();
            console.log('done.');
        });
    });
}

// seedCollection('customers', customers);
// seedCollection('users', users);
seedCollection('plans', plans);