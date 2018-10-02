const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const customerRouter = require('./route/customerRouter');

let client;

function buildExpress(client){
    const app = express();

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use('/', customerRouter(client));

    app.use('*', (req, res) => {
        return res.sendFile(path.join(__dirname, 'public/index.html'));
      });  
      
    return app;
}

module.exports = buildExpress;