import styled from "styled-components";



export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  width: 100%;
  padding-left: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #D94727;
  align-text: left;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 10px;
  margin: 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #808080;
  background-color: #F9ECDC;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px ;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius:30px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-color: #EF8B77;;
  

  &:hover {
    filter: brightness(1.03);
  }
`;

export const DividerText = styled.h2 `
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
`;

export const DividerBox = styled.div `
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background-color: red;
`

export const HorizontalLine = styled.div `
  width: 30%;
  height: 0px;
  border: 1px solid #000000;
`;


export const CredenPage = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #ADE3EA;
  align-items: center;
  justify-content: center;
  display: flex;
`;
