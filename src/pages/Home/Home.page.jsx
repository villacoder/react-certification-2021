import React, { useContext, Suspense, lazy } from 'react';
import './Home.styles.css';
import { SectionContainer, VideoListContainer, override } from './styledComponents';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import GridLoader from 'react-spinners/ClipLoader';
const VideoList = lazy(() => import('../../components/VideoList/VideoList.component'));

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
