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
        <BoxContainer>
          <FileUpload />  
        </BoxContainer>
      </DashPage>
    </>
  )
}