import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  DividerText,
  DividerBox, HorizontalLine
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer >
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <Link to="/input"><SubmitButton type="submit">LOG IN</SubmitButton></Link>
      <Marginer direction="vertical" margin="1em" />
      <DividerText>OR</DividerText>
      {/* <DividerBox>
        <HorizontalLine /> 
        
        <HorizontalLine /> 
      </DividerBox> */}
      <SubmitButton style={{backgroundColor: "#4267B2", marginBottom: 10}}>Login with Facebook</SubmitButton>
      <SubmitButton style={{backgroundColor: "#fff", marginBottom: 20, color: "#4967B2" }}>Login with Google</SubmitButton>
    </BoxContainer>
  );
}
