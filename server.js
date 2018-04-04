var port =process.env.PORT || 8888;
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./database');
 

 
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.set('view engine', 'ejs'); // set up ejs for templating


// app.use("/assets", express.static(__dirname + "/assets"));
require('./app/routes')(app, database);

app.listen(port, function(err){
    if(err)console.log('error ', err);
  
    console.log("Server listening on port " + port);
  });