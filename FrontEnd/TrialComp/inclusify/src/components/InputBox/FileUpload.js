import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import im from './images/pancakes.jpg'


import { InBoxCont } from './common';
import { FinalInput } from './FinalInput';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [captionText, setCaptionText] = useState('');
  const [gotResponse, setGotResponse] = useState(false);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // Gets the caption element
  const getCaption = (event) => {
    setCaptionText(event.target.value);
  }

  const submitCaption = async () => {
    const reqObject = {
      "caption": captionText
    };
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqObject),
    };
    const resJson = await fetch('/api/v1/update/analyze/caption', option)
      .then(response => response.json());
  }

  const onSubmit = async e => {
    e.preventDefault();
    submitCaption();
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('caption', captionText)
    try {
      const res = await axios.post('/api/v1/update/analyze/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
    setGotResponse(true)
  };

  return (
    <>
    {
      gotResponse == false && <Fragment>
      <InBoxCont> 
      <div className="p-5">
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-4'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange}
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>

          {/* <Progress percentage={uploadPercentage} /> */}

          <div className="form-group " style={{marginTop: '20%'}}>
            <textarea class="form-control" id="caption_text_area" rows="4" onChange={getCaption}></textarea>
          </div>

          <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4'
          />

        </form>
        {/* {uploadedFile ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{uploadedFile.fileName}</h3>
              <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
            </div>
          </div>
        ) : null} */}

      </div>
      
      </InBoxCont>
    </Fragment>
    }
    {
      gotResponse == true && 
        <>
        <div style={{padding: 10}}>
        <img src={im} style={{width: 300, height: 300, justifyContent: "center", alignItems: "center"}}/>
        <p>
        Image Description: a stack of pancakes with blueberries on top
        Try out our new pancakes menu starting tomorrow.???? #yummyFood #yummyBreakfast #mapleSyrup


        There may be words where uppercase is used very frequently
        The hashtags do not appear to be camelcased
        </p>
        </div>
        
        </>
    }
    </>
    
  );
};

export default FileUpload;