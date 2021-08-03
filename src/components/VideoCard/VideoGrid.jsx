import React, { useEffect, useState } from 'react';
import YouTube from 'simple-youtube-api';
import Grid from '@material-ui/core/Grid';
import config from '../../config';
import VideoCard from './VideoCard';

const youtube = new YouTube(config.apiKey);
export const VideoGrid = ({
  searchString,
  selectedVideo,
  setSelectedVideo,
  setPlayVideo,
}) => {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const result = await youtube.searchVideos(searchString, 20);

      if (result.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setVideoList(result);
    };
    callApi();
  }, [searchString, selectedVideo]);

  const selectedVideoCallback = (videoDetail) => {
    setSelectedVideo(videoDetail);
  };

  return (
    <div>
      {!error && (
        <Grid
          container
          item
          xs={12}
          sm={12}
          spacing={3}
          direction="row"
          alignItems="stretch"
          justifyContent="center"
        >
          <VideoCard
            videoList={videoList}
            changeSelection={selectedVideoCallback}
            selectedVideoId={selectedVideo.id}
            setPlayVideo={setPlayVideo}
          />
        </Grid>
      )}
    </div>
  );
};
