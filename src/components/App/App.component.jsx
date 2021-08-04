import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import AuthProvider from '../../providers/Auth';
import VideoListProvider from '../../providers/VideoList/VideoList.provider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
// import Private from '../Private';
import Layout from '../Layout';
import VideoDetails from '../VideoDetails/VideoDetails.component';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoListProvider>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/video/:id">
                <VideoDetails />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </VideoListProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
