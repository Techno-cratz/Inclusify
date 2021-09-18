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
        <div class="row">
          <div class="col-md-6">
            <form method="post" action="#" id="#">
              <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file"  id="myFile" name="filename" class="form-control" multiple="" onChange={addImage}/>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <img src={imageFile} />
          </div>
        </div>
      </div>
      {/* ------------------- */}

    </>
  )
}


export default InputBox;