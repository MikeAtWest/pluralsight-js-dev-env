//Set up an Express Web server.

import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express(); //Create an instance of Express.

//Send all requests from our root folder to the index.html file.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

//Listen for requests, display any errors, otherwise open browser and display localhost.
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
})

