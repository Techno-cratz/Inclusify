var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
 * Post endpoint for analyzing user's posts
 */
app.post('/api/v1/update/analyze', (req, res) => {
  console.log(req)
  res.send('Sounds Good');
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});