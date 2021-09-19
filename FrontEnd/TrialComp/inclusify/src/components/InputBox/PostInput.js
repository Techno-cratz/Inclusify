import React from "react";

import {
  DashPage,
  BoxContainer
} from './common'
import FileUpload from "./FileUpload";

export function PostInput () {
  return (
    <>
      
      <DashPage>
      {/* <h1>INCLUSIFY</h1> */}
        <BoxContainer>
          <FileUpload />  
        </BoxContainer>
      </DashPage>
    </>
  )
}