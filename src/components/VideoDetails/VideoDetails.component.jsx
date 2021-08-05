import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { useFetch } from '../../utils/hooks/useFetch';
import './VideoDetails.styles.css';
const VideoDetails = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoListContext);

  const { singleVideo } = useFetch(id);

  return (
    <div className="video-details-container">
      <div className="video-details-selected-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></iframe>
        {singleVideo.length > 0 ? (
          <div className="video-details-selected-video__text">
            <span>{singleVideo[0].snippet.title}</span>{' '}
            <span>{singleVideo[0].snippet.description}</span>{' '}
          </div>
        ) : null}
      </div>
      <div className="video-details-similar-videos">
        <h1>placeholder content</h1>
      </div>
    </div>
  );
};

export default VideoDetails;
