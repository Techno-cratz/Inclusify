import React from "react";

import {
  DashPage,
  BoxContainer,
  SubmitButton
} from './common'

export function FinalInput (props) {
  const {imageFile, captionText} = props;

  return (
    <>
      <DashPage>
      <BoxContainer>
        {imageFile != null && <img src={imageFile} />}
        {captionText != null && <textarea>{captionText}</textarea>}
        <br />
        <SubmitButton>Post</SubmitButton>
      </BoxContainer>
      </DashPage>
    </>
  );
}