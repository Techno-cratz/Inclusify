var express = require('express');
const fileUpload = require('express-fileUpload');

const hootSuite = require('./TrialComp/message')


var app = express();
app.use(express.json({limit: '1mb'}))
app.use(fileUpload());

const testImp = require('./TrialComp/testImport');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
 * Post endpoint for analyzing user's posts
 */
app.post('/api/v1/update/analyze/image', (req, res) => {
  console.log("Request Received")
  if (req.files === null) {
    console.log("Image not Received"); // TODO: Remove the log
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  // console.log(req.files)
  let file = req.files.file
  
  // 
  postHootsuite(file)

  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
})


app.post('/api/v1/update/analyze/caption', (req, res) => {
  // console.log("")
  if (req.body == null)  {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const caption = req.body.caption;

  console.log(caption)
  res.json(["Hello"]);
});



app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

function postHootsuite(imageFile) {
  // Call the testing function 
  hootSuite.hootSuiteApiCall(imageFile.size, "image/jpg", imageFile)
}

