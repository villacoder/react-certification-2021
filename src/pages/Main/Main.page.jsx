import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { VideoGrid } from '../../components/VideoCard/VideoGrid';
import { NavSearchBar } from '../../components/NavSearchBar/NavSearchBar';
import { VideoDetails } from '../../components/VideoDetails/VideoDetails';
import Footer from '../../components/App/Footer';
import VideoContext from '../../context/VideoContext';
import './Main.styles.css';

const MainPage = () => {
  const [passToChild, setPassToChild] = useState('');
  const [searchButton, setSearchButton] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});

  if (playVideo || !searchButton) {
    return (
      <VideoContext.Provider
        value={{
          setPassToChild,
          setSearchButton,
          setPlayVideo,
          selectedVideo,
          setSelectedVideo,
        }}
      >
        <NavSearchBar />
        <br />
        <Row style={{ padding: '0 10%', marginTop: 30 }}>
          <VideoDetails />
        </Row>
        <Row style={{ padding: '0 10%' }}>
          <Footer />
        </Row>
      </VideoContext.Provider>
    );
  }
  return (
    <VideoContext.Provider
      value={{
        setPassToChild,
        setSearchButton,
        setPlayVideo,
        selectedVideo,
        setSelectedVideo,
        passToChild,
      }}
    >
      <NavSearchBar />
      <br />
      <VideoGrid justifyContent="center" />
    </VideoContext.Provider>
  );
};

export default MainPage;
