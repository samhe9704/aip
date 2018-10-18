const express = require('express');
//const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

//get all the plan cards
router.get('/plans', (req, res) => {
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');
    // retrieve all plans
    plansCollection.find({}).toArray((err, docs) => {
        if (err) {
            return res.send(err);
        }
        return res.json(docs);
    })
});
//add a new plan
router.post('/add-plan', (req, res) => {
    const plan = req.body;
    const db = req.app.locals.db;

    const plansCollection = db.collection('plans');

    plansCollection.insertOne(plan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new plan.'});
        }

        const newPlan = result.ops[0];

        return res.status(201).json(newPlan);
    });
});

module.exports= router;