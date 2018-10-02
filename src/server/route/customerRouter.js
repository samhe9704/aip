const express = require('express');



function customerRouter(client) {
const router = express.Router();


router.get('/customers', (req, res) => {
    const customersCollection = client.collection('customers');

    customersCollection.find({}).toArray((err, docs) => {
        return res.json(docs);
    });
});

router.post('/register', (req, res) => {
    const customer = req.body;

    const customersCollection = client.collection('customers');

    customersCollection.insertOne(customer, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        };

        const newCustomer = r.ops[0];

        return res.status(201).json(newCustomer);
    });
});
return router;
}

module.exports = customerRouter;