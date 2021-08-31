import React from 'react';
import Grid from '@material-ui/core/Grid';

const VideoCard = ({ changeSelection, videoList, selectedVideoId }) => {

  const changeSelectedVideo = (data) => {
    changeSelection(data);
  };

  return (
    <>
      {videoList.length > 0 &&
        videoList.map((data) => {
          if (data?.id !== selectedVideoId) {
            return (
              <Grid
                item
                xs={8}
                sm={10}
                md={4}
                lg={3}
                xl={3}
                key={data?.id}
                onClick={() => {
                  changeSelectedVideo(data);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className="card">
                    <div className="card-cover-image">
                      <img src={data?.thumbnails.medium.url} alt="thumbnail" />
                    </div>
                    <div className="card-box">
                      <div className="card-title">
                        <span>{data?.title}</span>
                      </div>
                      <div className="card-subtitle">{data?.channel.title}</div>
                      <div className="card-content">
                        <p>{data?.description}</p>
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
