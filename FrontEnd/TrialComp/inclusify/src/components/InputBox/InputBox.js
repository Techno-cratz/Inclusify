import { useState } from "react";
import './InputBox.css'

const InputBox = () => {
  const [imageFile, setImageFile] = useState(null);
  const [captionText, setCaptionText] = useState("");

  // Gets the image element
  const addImage = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  }

  // Gets the caption element
  const getCaption = (event) => {
    setCaptionText(event.target.value);
  }

  const submitForReview = async (event) => {
    console.log("Sending Request")
    const reqObject = {
      "image": imageFile,
      "caption": captionText
    }
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqObject),
    }
    
    // Ideally contains the json object sent by the backend
    const resJson = await fetch('/api/v1/update/analyze', option)
      .then(response => response.json());
    event.preventDefault();
  }


  // api/v1/update/analyze

  return (
    <>
      <br />
      {/* -------- The input box code ----------- */}
      {/* TODO: Change the bootstrap to global scope */}
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <div class="container">
        <div >
          <div class="col-md-6" style={imageFile == null ? {} : { display: 'none' }}>
            {/* style={imageFile==null ? {} : {display: 'none'}} */}
            <form onSubmit={submitForReview}>
              <div class="form-group files">
                {/* <label>Upload Your File </label> */}
                <input type="file" id="myFile" name="filename" class="form-control" multiple="" onChange={addImage} />
              </div>
              <div class="form-group">
                {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                <textarea class="form-control" id="caption_text_area" rows="4" onChange={getCaption}></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-md-6 containerBox" style={imageFile != null ? {} : { display: 'none' }}>
            <img src={imageFile} class="form-control" alt=""/>
            <button class="btnBox">Button</button>
          </div>
        </div>
      </div>
      {/* ------------------- */}

    </>
  )
}



export default InputBox;