import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { useFetch } from '../../utils/hooks/useFetch';
import './VideoDetails.styles.css';
const VideoDetails = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoListContext);

  const { singleVideo } = useFetch(id);
  console.log(singleVideo);
  return (
    <div className="video-details-container">
      <div className="video-details-selected-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></iframe>
        {/* {similarVideos.length > 0 ? <h1>{currentVideo.snippet.title}</h1> : null} */}
      </div>
      <div className="video-details-similar-videos">
        <h1>placeholder content</h1>
      </div>
    </div>
  );
};

export default VideoDetails;
