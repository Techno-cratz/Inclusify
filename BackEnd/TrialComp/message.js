const axios = require("axios");
const token = "TyB5lPcGtnUkDHUHovGy-I_B_W7r6w4XrGAR68mMD1s.W8uq8CaKCyx4PY9is_iO02WevCSdHDQrBD5Gjcgn92w";
const socialProfileId = 24182524;

async function getMediaURL(size, type){
    const data = {
        "sizeBytes": size,
        "mimeType": type,
    };

    const config = {
        method: 'post',
        url:  'https://platform.hootsuite.com/v1/media',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };
    return axios(config)
        .then(function (response)
            {//console.log(JSON.stringify(response.data));
            const url = response.data.data.uploadUrl;
            return url;
            })
        .catch(function (error) {console.log(error);});
}


async function uploadMedia(url,type,size,image) {
    var config = {
        method: 'put',
        url: url,
        headers: {
            'Content-Type': type,
            'Content-Length': size
        },
        data : image
    };
    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);});
}

const hootSuiteApiCall = async function (size, type, image) {
    const url1 = await getMediaURL(size, type);
    console.log(typeof(url1));
    // uploadMedia(url1, type, size, image);
}

// hootSuiteApiCall(8184, "image/jpg");



module.exports = { hootSuiteApiCall }

/*async function scheduleMessage(text, time) {
    const data = {
        "text": text,
        "socialProfileIds": [socialProfileId],
        "scheduledSendTime": time.toISOString(),
        "emailNotification": false
    };

    const config = {
        method: 'post',
        url: 'https://platform.hootsuite.com/v1/messages',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    return axios(config)
        .then(function (response) {console.log(JSON.stringify(response.data));})
        .catch(function (error) {console.log(error);});
}


// How to call this function
scheduleMessage("Hello, world!", new Date(2021, 9, 19, 6, 45, 0));*/

