const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const cors = require('cors');

const customerRouter = require('./route/customerRouter');
const planRouter = require('./route/planRouter');
const userRouter = require('./route/userRouter');

app.use(express.static(path.join(__dirname, 'public')));
// Middle ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
// Access to the routers
app.use('/api', customerRouter);
app.use('/api', planRouter);
app.use('/api', userRouter);
// require the file which storing the configuration
require('dotenv').config();

MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');
    if (err){
        console.log('fail to access database...');
    }
    
    app.listen(process.env.PORT || 4200, () => {
    const myAwesomeDB = client.db();
    // store locally to share the database connection with other files       
    app.locals.db = myAwesomeDB;
    //database = myAwesomeDB;
    console.log('listenning on port 4200...');
    });
});

// pass to index.html
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });



