//Set up an Express Web server.

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const port = 3000;
const app = express(); //Create an instance of Express.
const compiler = webpack(config); //Create an instance of Webpack.

//tell Express to use Webpack as middleware.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

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

