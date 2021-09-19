import styled from "styled-components";

export const DashPage = styled.div `
width: 100%;
height: 100vh;
background-color: #EF8B77;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
`;

export const BoxContainer = styled.div`
  width: 70%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  border-radius: 60px;
  background-color: #E9DED0;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

// export const CaptionText = styled.textarea `
//   background-color:  
// `;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px ;
  color: #E9DED0;
  border: none;
  border-radius:30px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-color: #006298;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  

  &:hover {
    filter: brightness(1.03);
  }
`;


const HeaderText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  color: #006298;
`;