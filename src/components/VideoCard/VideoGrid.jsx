import React, { useEffect, useState, useContext } from 'react';
import YouTube from 'simple-youtube-api';
import Grid from '@material-ui/core/Grid';
import VideoCard from './VideoCard';
import VideoContext from '../../context/VideoContext';

const youtube = new YouTube(process.env.REACT_APP_API_KEY_YOUTUBE);
export const VideoGrid = () => {
  const { passToChild, selectedVideo, setSelectedVideo, setPlayVideo } =
    useContext(VideoContext);
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchStringToUse =
      passToChild || localStorage.getItem('lastSearch') || 'Wizeline';
    const callApi = async () => {
      const result = await youtube.searchVideos(searchStringToUse, 20);

      if (result.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setVideoList(result);
    };
    callApi();
    localStorage.setItem('lastSearch', passToChild);
  }, [passToChild, selectedVideo]);

  const selectedVideoCallback = (videoDetail) => {
    setSelectedVideo(videoDetail);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      {!error && (
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid container key={selectedVideo.id} item>
              <VideoCard
                videoList={videoList}
                changeSelection={selectedVideoCallback}
                selectedVideoId={selectedVideo.id}
                setPlayVideo={setPlayVideo}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
