const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');

const customerRouter = require('./route/customerRouter');
const planRouter = require('./route/planRouter');
//const buildExpress = require('./express');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api', customerRouter);
app.use('/api', planRouter);

require('dotenv').config();

let database;
MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');

    //buildExpress(client)
        app.listen(4200, () => {
        const myAwesomeDB = client.db();

        app.locals.db = myAwesomeDB;
        database = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});

app.use(checkJwt({ secret: process.env.JWT_SECRET })
.unless({ path: ['/api/login','/api/register','/api/plans']
          }));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log('no token');
        res.status(401).send({ error: err.message});
    }
});

//authentication 
app.post('/api/login', (req, res) => {
    const user = req.body;

    const usersCollection = database.collection('users');

    usersCollection.findOne({ username: user.username }, (err, result) => {
        if(!result) {
            return res.status(504).json({ error: 'user not found'})
        }

        if(!bcrypt.compareSync(user.password, result.password)) {
            return res.status(401).json({ error: 'incorrect password'});
        }

        const payload = {
            username: result.username,
            admin: result.admin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'2h'});

        return res.json({
            message: 'Authentication done properly',
            token: token
        });
    });
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });

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
