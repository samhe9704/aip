const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const buildExpress = require('./express');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

require('dotenv').config();

//let database;

MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');

    buildExpress(client).listen(4200, () => {
        const myAwesomeDB = client.db();

        //client = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});
// //get all the customer cards
// app.get('/customers', (req, res) => {
//     const customersCollection = database.collection('customers');

//     customersCollection.find({}).toArray((err, docs) => {
//         return res.json(docs);
//     })
// });

// //register a new customer card
// app.post('/register', (req, res) => {
//     const customer = req.body;

//     const customersCollection = database.collection('customers');

//     customersCollection.insertOne(customer, (err, r) => {
//         if (err) {
//             return res.status(500).json({ error: 'Error when inserting new record.'});
//         }

//         const newCustomer = r.ops[0];

//         return res.status(201).json(newCustomer);
//     });
// });
// app.get('*', (req, res) => {
//     return res.sendFile(path.join(__dirname, 'public/index.html'));
//   });

// app.delete('/customers/:id', (req, res) => {
//     let query = {_id: req.params.id};

//     const customersCollection = database.collection('customers');

//     customersCollection.remove(query, (err, customer) => {
//         if(err){
//         return res.send(err);
//         }
//         return res.json(customer);
//     });
// });
