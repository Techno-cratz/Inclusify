var express = require('express');

var app = express();
app.use(express.json({limit: '1mb'}))

const testImp = require('./TrialComp/testImport');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
 * Post endpoint for analyzing user's posts
 */
app.post('/api/v1/update/analyze', (req, res) => {
  console.log("Request Received")
  let dat = req.body
  console.log(dat)

  res.json(["Hello"]);
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});