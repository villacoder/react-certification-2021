import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { VideoGrid } from '../../components/VideoCard/VideoGrid';
import { NavSearchBar } from '../../components/NavSearchBar/NavSearchBar';
import { VideoDetails } from '../../components/VideoDetails/VideoDetails';
import Footer from '../../components/App/Footer';
import './Main.styles.css';

const MainPage = () => {
  const [passToChild, setPassToChild] = useState('');
  const [searchButton, setSearchButton] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [playVideo, setPlayVideo] = useState(false);

  if (playVideo || !searchButton) {
    return (
      <>
        <NavSearchBar
          setPassToChild={setPassToChild}
          setSearchButton={setSearchButton}
          setPlayVideo={setPlayVideo}
        />
        <br />
        <Row style={{ padding: '0 10%', marginTop: 30 }}>
          <VideoDetails
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        </Row>
        <Row style={{ padding: '0 10%' }}>
          <Footer />
        </Row>
      </>
    );
  }
  return (
    <div>
      <NavSearchBar
        setPassToChild={setPassToChild}
        setSearchButton={setSearchButton}
        setPlayVideo={setPlayVideo}
      />
      <br />
      <VideoGrid
        searchString={passToChild}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        setPlayVideo={setPlayVideo}
        justifyContent="center"
      />
    </div>
  );
};

export default MainPage;
