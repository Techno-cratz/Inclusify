'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
// </snippet_imports>

// <snippet_vars>
/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
const key = '633fee0de4174ed687e5e90336c5fc12';
const endpoint = 'https://htn-inclusify.cognitiveservices.azure.com/';
// </snippet_vars>
// </snippet_imports_and_vars>

// <snippet_client>
const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);
// </snippet_client>
/**
 * END - Authenticate
 */

// <snippet_functiondef_begin>

async function computerVision (filepath) {
  // </snippet_functiondef_begin>

  /**
   * DESCRIBE IMAGE
   * Describes what the main objects or themes are in an image.
   * Describes both a URL and a local image.
   */

  const describeImagePath = filepath;
  // DescribeImageInStream takes a function that returns a ReadableStream, NOT just a ReadableStream instance.
  const captionLocal = (await computerVisionClient.describeImageInStream(
    () => createReadStream(describeImagePath))).captions[0];
  // console.log(`This may be ${captionLocal.text}`);
  return Promise.resolve(captionLocal.text);
  /**
   * END - Describe Image
   */
}
module.exports =  {
  computerVision
}