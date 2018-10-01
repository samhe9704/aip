const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

app.use(express.static(path.join(__dirname, 'public')));
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
//get all the customer cards
app.get('/customers', (req, res) => {
    const customersCollection = database.collection('customers');

    customersCollection.find({}).toArray((err, docs) => {
        return res.json(docs);
    })
});

//register a new customer card
app.post('/register', (req, res,) => {
    const user = req.body;

    const customersCollection = database.collection('customers');

    customersCollection.insertOne(user, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newCustomer = r.ops[0];

        return res.status(201).json(newCustomer);
    });
});
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });
