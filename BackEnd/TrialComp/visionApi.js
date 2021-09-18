// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: "./VisionApi.json"
});


async function test() {
    const fileName = './Steve.jpg';
// Performs label detection on the local file
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}

// test();

async function detectText(fileName) {
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  console.log('Text:');
  detections.forEach(text => console.log(text));
  
  // This contains the entire text from the photo
  // detections[0].description
}

// detectText('./Steve.jpg');

async function detectLandmarks(fileName) {
  const [result] = await client.landmarkDetection(fileName);
  const landmarks = result.landmarkAnnotations;
  console.log('Landmarks:');
  landmarks.forEach(landmark => console.log(landmark));
}

// detectLandmarks('/Users/mehar/Downloads/Eiffel.jpg')

