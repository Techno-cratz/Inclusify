// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: "./VisionApi.json"
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';
const fileName = './steve.jpg';
async function label() {
// Performs label detection on the local file
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
    //console.log(result);
}

async function detectText() {
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    //detections.forEach(text => console.log(text.description));

    // This contains the entire text from the photo
     console.log(detections[0].description);
}

// detectText('./Steve.jpg');

async function detectLandmarks() {
    const [result] = await client.landmarkDetection(fileName);
    const landmarks = result.landmarkAnnotations;
    console.log('Landmarks:');
    landmarks.forEach(landmark => console.log(landmark.description));
}

// detectLandmarks('/Users/mehar/Downloads/Eiffel.jpg')

async function faceDetection(){
    const[result] = await client.faceDetection(fileName);
    const faces = result.faceAnnotations;
    console.log('Faces:');
    faces.forEach((face, i) => {
        console.log(` Face #${i+1}:`);
        console.log(`    Joy ${face.joyLikelihood}:`);
        console.log(`    Anger: ${face.angerLikelihood}`);
        console.log(`    Sorrow: ${face.sorrowLikelihood}`);
        console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
}

async function logoDetection(){
    const[result] = await client.logoDetection(fileName);
    const logos = result.logoAnnotations;
    console.log('Logos:');
    logos.forEach(logo => console.log(logo));
}

label();
faceDetection();
detectText();
detectLandmarks();
logoDetection();