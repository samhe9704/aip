const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
// const index = require('../server/route/index');
require('dotenv').config();

let database;

MongoClient.connect(process.env.DB_CONN, (err, db) => {

    console.log('connected to mongodb...');

    app.listen(4200, () => {
        const myAwesomeDB = db.db('gym-app-aip');
       // database = myAwesomeDB.collection('theCollectionIwantToAccess');
       

        database = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});

app.get('/customers', (req, res) => {
    const customersCollection = database.collection('customers');

    customersCollection.find({}).toArray((err, docs) => {
        return res.json(docs);
    })
})

// app.use('/',index);