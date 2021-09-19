import React from "react";



import {
  DashPage,
  BoxContainer,
  SubmitButton,
  ImEl
} from './common'

import  pic from './images/pancakes.jpg';

export function FinalInput (props) {
  const {imageFileP, captionTextP} = props;

  const onClickHandler = async () => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    }
    let resJson = await fetch('/api/v1/update/post', option)
    .then(response => response.json())
  }

  return (
    <>
      <DashPage>
      <BoxContainer style={{padding: 20}}>
        {/* <ImEl src={image} className="img-fluid"/> */}
        <img src={imageFileP} style={{width: 300, height: 300, justifyContent: "center", alignItems: "center"}}/>
        <p>
        Image Description: a stack of pancakes with blueberries on top
        Try out our new pancakes menu starting tomorrow.🤤 #yummyFood #yummyBreakfast #mapleSyrup


        There may be words where uppercase is used very frequently
        The hashtags do not appear to be camelcased
        </p>
        {/* <textarea>dsfds</textarea> */}
        {/* <br /> */}
        <SubmitButton onClick={onClickHandler}>Post</SubmitButton>

      </BoxContainer>
      </DashPage>
    </>
  );
}