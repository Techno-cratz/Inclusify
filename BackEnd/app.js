var express = require('express');
const fileUpload = require('express-fileUpload');

var app = express();
// app.use(express.json({limit: '1mb'}))
app.use(fileUpload());

const testImp = require('./TrialComp/testImport');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
 * Post endpoint for analyzing user's posts
 */
app.post('/api/v1/update/analyze', (req, res) => {
  console.log("Request Received")
  if (req.files === null) {
    console.log("Image not Received"); // TODO: Remove the log
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  let file = req.files.file
  console.log(file.size)

  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
})



app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});