import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import './VideoDetails.styles.css';
const VideoDetails = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoListContext);
  const similarVideos = videos.slice(0, 8);
  console.log(similarVideos);
  return (
    <div className="video-details-container">
      <div className="video-details-selected-video">
        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
            title="test"
          ></iframe>
        </div>
      </div>
      <div className="video-details-similar-videos">
        <h1>placeholder content</h1>
      </div>
    </div>
  );
};

export default VideoDetails;
