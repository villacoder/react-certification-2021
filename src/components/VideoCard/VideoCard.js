import React from 'react';
import Grid from '@material-ui/core/Grid';

const VideoCard = ({ videoList, changeSelection, selectedVideoId, setPlayVideo }) => {
  const changeSelectedVideo = (data) => {
    changeSelection(data);
  };

  return (
    <>
      {videoList.length > 0 &&
        videoList.map((data) => {
          if (data.id !== selectedVideoId) {
            return (
              <Grid
                item
                xs={3}
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                key={data.id}
                onClick={() => {
                  setPlayVideo(true);
                  changeSelectedVideo(data);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className="card">
                    <div className="card-cover-image">
                      <img src={data.thumbnails.medium.url} alt="thumbnail" />
                    </div>
                    <div className="card-box">
                      <div className="card-title">
                        <span>{data.title}</span>
                      </div>
                      <div className="card-subtitle">{data.channel.title}</div>
                      <div className="card-content">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          }
        })}
    </>
  );
};

export default VideoCard;
