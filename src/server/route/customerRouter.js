const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

//get all the customer cards
router.get('/customers', (req, res) => {
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');

    customersCollection.find({}).toArray((err, docs) => {
        if (err) {
            return res.send(err);
        }
        return res.json(docs);
    })
});

router.get('/customers/:id', (req, res) => {
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');

    customersCollection.findOne({_id: ObjectId(req.params.id)}, (err, docs) => {
        if (err){
            res.send(err);
        }
        res.json(docs);
    })
})

//register a new customer card
router.post('/register', (req, res) => {
    const db = req.app.locals.db;
    const customer = req.body;

    const customersCollection = db.collection('customers');

    customersCollection.insertOne(customer, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newCustomer = result.ops[0];
        
        return res.status(201).json(newCustomer);
    });
});

router.delete('/customers/:id', (req, res) => {

    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');

    customersCollection.deleteOne({ _id : ObjectId(req.params.id)}, (err,customer) => {
        if(err){
        res.send(err);
        }
        res.json(customer);
       });
   });

module.exports = router;