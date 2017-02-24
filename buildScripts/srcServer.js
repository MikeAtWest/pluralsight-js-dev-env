//Set up an Express Web server.

var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); //Create an instance of Express.

//Send all requests from our root folder to the index.html file.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

//Listen for requests, display an errors, otherwise open browser and display localhost.
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
})

