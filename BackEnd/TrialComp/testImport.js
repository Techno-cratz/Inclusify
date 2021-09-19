
const testFunc1 = async function(fileName='./steve.jpg') {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
      keyFilename: "./VisionApi.json"
  });
  detectText(fileName);
}

async function detectText(fileName) {
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  console.log('Text:');
  //detections.forEach(text => console.log(text.description));

  // This contains the entire text from the photo
   console.log(detections[0].description);
}

module.exports = { testFunc1 };