'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('root'));
app.get('/', function(req, res) {
    res.sendfile('./root/index.html');
});

app.listen(5000);
