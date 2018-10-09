const express = require('express');
const ObjectId = require('mongodb');
const router = express.Router();

//get all the plan cards
router.get('/plans', (req, res) => {
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');

    plansCollection.find({}).toArray((err, docs) => {
        if (err) {
            return res.send(err);
        }
        return res.json(docs);
    })
});
//add new plan
router.post('/add-plan', (req, res) => {
    const plan = req.body;
    const db = req.app.locals.db;

    const plansCollection = db.collection('plans');

    plansCollection.insertOne(plan, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new plan.'});
        }

        const newPlan = r.ops[0];

        return res.status(201).json(newPlan);
    });
});

module.exports= router;