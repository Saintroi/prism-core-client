import React, { useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Nav from './components/nav';
import ListUser from './components/listUser';
import Callback from './components/callback';
import ErrorBoundary from './components/errorBoundary';
import GuardedRoute from './components/guardedRoute';
import styled, { ThemeProvider } from 'styled-components';
import auth from './auth'
import './App.css';

// Styles  
const theme = {
  backgroundColor: '#F4F4F4',
  altBackgroundColor: 'white',
  accentColor: '#00467E',
  altAccentColor: '#559FD3',
  textColor: 'black',
  altTextColor: '#8298A3' 
}
const Grid = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: grid;
  grid-template-areas:
    "nav head"
    "nav content";

  grid-template-columns: 150px 1fr;
  grid-template-rows: 50px 1fr;
  grid-auto-columns: 300px;
  grid-gap: 10px;
  transition: 300ms;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "nav"
      "head"
      "content";

    grid-template-columns: 1fr;
    grid-template-rows: 8vh 5vh 1fr;
  }
`;

// JSX

function App(props) {

  useEffect(() => {
    if (props.location.pathname === '/callback') return;

    async function tryAuth(){
    try {
      await auth.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.error(err.error);
    }
  }

  tryAuth();
  });

  const finished = (auth.tokenLoading || auth.isAuthenticated)

  if(!finished){
    return 'Loading';
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Grid >
        <Nav />
        <GuardedRoute exact path='/' component={ListUser}></GuardedRoute>
        <Route exact path='/callback' component={Callback} />
        </Grid>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default withRouter(App);