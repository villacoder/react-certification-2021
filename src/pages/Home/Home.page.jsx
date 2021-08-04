import React, { useContext, Suspense, lazy } from 'react';
import './Home.styles.css';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import GridLoader from 'react-spinners/ClipLoader';
const VideoList = lazy(() => import('../../components/VideoList/VideoList.component'));

const SectionContainer = styled.section`
  width: 95%;
  margin: auto;
`;
SectionContainer.displayName = 'SectionContainer';
const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;

  @media only screen and (max-width: 870px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 670px) {
    display: flex;
    justify-content: center;
  }
`;
VideoListContainer.displayName = 'VideoListContainer';

const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #060b26;
`;

const HomePage = () => {
  const { videos } = useContext(VideoListContext);

  return (
    <SectionContainer className="homepage-container">
      <div className="homepage__title">
        <h2 style={{ marginLeft: '4rem', marginTop: '2rem' }}>Our videos:</h2>
      </div>
      <Suspense fallback={<GridLoader size={150} css={override} />}>
        <VideoListContainer className="homepage__video">
          {videos.map((video) => (
            <VideoList key={video.id.videoId} video={video} />
          ))}
        </VideoListContainer>
      </Suspense>
    </SectionContainer>
  );
};

export default HomePage;
