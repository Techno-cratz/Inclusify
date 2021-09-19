var express = require('express');
const fileUpload = require('express-fileUpload');
const fs = require('fs');

const hootSuite = require('./TrialComp/HootSuiteApi')
const captionProcess = require('./TrialComp/main1');

var app = express();
app.use(express.json({limit: '1mb'}))
app.use(fileUpload());


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
  // postHootsuite(file)
  let filePath = `${__dirname}/uploads/${file.name}`
  processInput(file, filePath);
  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
})


/**
 * Writes the caption to the text file
 */
app.post('/api/v1/update/analyze/caption', (req, res) => {
  // console.log("")
  if (req.body == null)  {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const caption = req.body.caption;
  // console.log(caption)
  fs.writeFile('./uploads/caption.txt', caption, function (err) {
    if (err) return console.log(err);
    // console.log('caption > ./uploads/caption.txt');
  });
  res.json(["Hello"]);
});


app.post('/api/v1/update/post', (req, res) => {
  postHootsuite
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

function postHootsuite(imageFile, captionTextRes) {
  // Call the testing function
  const time = new Date(new Date().getTime() + 7 * 60000);
  hootSuite.hootSuiteApiCall(imageFile.size, "image/jpg", imageFile, captionTextRes, time)

  // Call the testing function 
  // hootSuite.hootSuiteApiCall(imageFile.size, "image/jpg", imageFile, "Hello World!", new Date(2021, 9, 19, 11, 9, 0))
}

function getCaption() {
  const tempCapt = fs.readFileSync('./uploads/caption.txt', 'utf8')
  return tempCapt;
}

async function processInput(imageFile, imageFileLoc) {
  console.log("Processing Input")
  const tempCaption = getCaption();
  console.log(tempCaption);
  console.log(imageFile.size);
  postHootsuite(imageFile, tempCaption)
  const capObj = await captionProcess.processCaption(imageFileLoc, tempCaption)
  console.log(capObj)
  console.log("Done")
}
