import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import MainPage from '../../pages/Main';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Layout>
              <HomePage />
            </Layout>
          </Route>
          <Route exact path="/login">
            <Layout>
              <LoginPage />
            </Layout>
          </Route>
          <Private exact path="/secret">
            <Layout>
              <SecretPage />
            </Layout>
          </Private>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
        <Fortune />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
