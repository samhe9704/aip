const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');
const cors = require('cors');
// const User = require("./data/user");

const customerRouter = require('./route/customerRouter');
const planRouter = require('./route/planRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/api', customerRouter);
app.use('/api', planRouter);

require('dotenv').config();

let database;
MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');

    //buildExpress(client)
        app.listen(process.env.PORT, () => {
        const myAwesomeDB = client.db();

        app.locals.db = myAwesomeDB;
        database = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});

app.use(checkJwt({ secret: process.env.JWT_SECRET })
.unless({ path: ['/api/login','/api/register','/api/plans','/add-user', '/api/add-user', '/customers', '/login', '/register', '/plans', '/add-plan']
          }));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log('no token');
        res.status(401).send({ error: err.message}).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }
});


app.post('/api/add-user', (req, res) => {
    const user = req.body;
    const password = req.body.password;
    const username = req.body.username;
    const usersCollection = database.collection('users');
    //    console.log(password);
    //    console.log(user);
    //    console.log(req.body.username);
        const hash = bcrypt.hashSync(password, 10, (err, hash) =>{
            if (err) {
                return res.status(500).json({ error: 'Error when hashing'});
            }
        });

        req.body.password = hash;
      
        // usersCollection.find({}).toArray((err, docs) => {
        //     if (err){
        //         console.log(err);
        //         return res.status(404).json({ error: 'error' })
        //     }
        //     console.log(docs);
            
        //     docs.forEach((item) => {
        //         console.log(item.username);
        //         if ( item.username == res.body.username ){
        //             return res.status(409).json({
        //                 message: 'user exists'
        //               });
        //         } else {
        //             usersCollection.insertOne(user, (err, result) => {
        //                 if (err) {
        //                     console.log(err);
        //                     return res.status(500).json({ error: 'Error when inserting new record.'});
        //                 } else {
        //                    const newUser = result.ops[0];
        //                    return res.status(201).json(newUser);
        //                 }
        //             })
        //         }
        //     }) 

        // })
        usersCollection.insertOne(user, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error when inserting new record.'});
            } else {
               const newUser = result.ops[0];
               return res.status(201).json(newUser);
            }
        })
    
    })






//authentication 
app.post('/api/login', (req, res) => {
    const user = req.body;

    const usersCollection = database.collection('users');
// try {
    usersCollection.findOne({ username: user.username }, (err, result) => {
        if (err) {
            return res.status(401).json({
                message: "login fail"
            })
        }
        
        if(!result) {
            return res.status(404).json({
                error: 'user not found',
                message: "User not found"
            })
        }

        if(!bcrypt.compareSync(user.password, result.password)) {
            return res.status(401).json({ error: 'incorrect password'});
        }

        const payload = {
            username: result.username,
            admin: result.admin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'2h'});

        return res.status(200).json({
            message: 'Authentication done properly',
            token: token
        });
        
    })
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.delete('/api/customers/:id', (req, res) => {

    //const db = req.app.locals.db;
    const customersCollection = database.collection('customers');

    customersCollection.deleteOne({ _id : ObjectId(req.params.id)},function(err,customer){
        if(err){
        res.send(err);
        }
        res.json(customer);
       });
   });

