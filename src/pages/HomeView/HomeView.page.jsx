import React from 'react';
import NavBar from '../../components/NavBar';
import VideosContainer from '../../components/VideosContainer';
import { data } from '../../data/youtube-videos-mock';

const HomeView = () => {
  return (
    <>
      <NavBar />
      <h2 className="content-title">Welcome to the Challenge!</h2>
      <VideosContainer {...data} />
    </>
  );
};

export default HomeView;
