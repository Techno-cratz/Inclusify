import { useState } from "react";
import './InputBox.css'

const InputBox = () => {
  const [imageFile, setImageFile] = useState(null);

  const addImage = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  }

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
            <form method="post" action="#" id="#" >
              <div class="form-group files">
                {/* <label>Upload Your File </label> */}
                <input type="file" id="myFile" name="filename" class="form-control" multiple="" onChange={addImage} />
              </div>
              <div class="form-group">
                {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-md-6 containerBox" style={imageFile != null ? {} : { display: 'none' }}>
            <img src={imageFile} class="form-control" />
            <button class="btnBox">Button</button>
          </div>
        </div>
      </div>

      {/* ------------------- */}

    </>
  )
}



export default InputBox;