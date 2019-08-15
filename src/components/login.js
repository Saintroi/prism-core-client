import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import auth from '../auth';

// Styles

const LoginBox = styled.div`
  height: 20vh;
  width: 20vw;
  background-color: white;
  border-color: black;
  border-width: 5px;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content; center;
  padding-top: 20px;
`

const TextInput = styled.input`
  display: inline-block;
  padding: 15px;
  width: 70%;
  height: 40px;
  margin: 8px;
  align-self: center;

`;

const LogBtn = styled.button`
  background: #00467E;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5vmin;
  align-self: center;
  margin-top: 10%;
  width: 30%;
  height: 30px;
  border-radius: 25px;

`;




//JSX

function Login()  {


  return (
    <LoginBox>
      <TextInput type="text" required placeholder='Email'></TextInput>
      <TextInput type="text" required placeholder='Password'></TextInput>
      <LogBtn>Login</LogBtn>
    </LoginBox>
  );
}


export default withRouter(Login);