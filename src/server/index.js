const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

let database;

MongoClient.connect(process.env.DB_CONN, (err, db) => {

    console.log('connected to mongodb...');

    app.listen(4200, () => {
        database = db;
        console.log('listenning on port 4200...');

    });
});

app.get('/customers', (req, res) => {
    const customersCollection = database.collection('customers');

    customersCollection.find({}).toArray((err, docs) => {
        return res.json(docs);
    })
})