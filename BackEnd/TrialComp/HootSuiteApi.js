const axios = require("axios");
const token = "3_UFYd7XKLsc0PIyKpc0ERYkit9O3YM6ZDIaF11BVIU.PET2gmgwNlZ8gWkdmx_jfuTbHDkuGXdVMW7MNiMaLvI";
const socialProfileId = 135704464;

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
            let data = [response.data.data.uploadUrl];
            data.push(response.data.data.id);
            return data;
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

async function scheduleMessage(text, time, id) {
    console.log(text)
    console.log(time)
    console.log(id)
    const data = {
        "text": text,
        "socialProfileIds": [socialProfileId],
        "scheduledSendTime": time.toISOString(),
        "emailNotification": false,
        "media":[{"id":id}]
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


const hootSuiteApiCall = async function (size, type, image, text, time) {
    let data = await getMediaURL(size, type);
    //console.log(data)
    const url1 = data[0]
    const id = data[1]
    console.log(url1);
    console.log(id);
    console.log("...............")
    await uploadMedia(url1, type, size, image);
    await scheduleMessage(text, time, id)
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

