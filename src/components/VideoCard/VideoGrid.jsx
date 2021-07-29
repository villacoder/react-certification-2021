import React from 'react';
import Grid from '@material-ui/core/Grid';
import { videoData } from '../../mock/videoData';
import { VideoCard } from './VideoCard';

export const VideoGrid = () => {
  function FormRow() {
    return videoData.items
      .filter(function (vid) {
        if (vid.id.kind === 'youtube#channel') {
          return false; // skip
        }
        return true;
      })
      .map((vi) => {
        return (
          <>
            <Grid
              item
              xs={3}
              container
              direction="row"
              justifyContent="center"
              alignItems="baseline"
            >
              <VideoCard
                key={vi.snippet.publishTime}
                title={vi.snippet.title}
                thumbnail={vi.snippet.thumbnails.high.url}
                description={vi.snippet.description}
              />
            </Grid>
          </>
        );
      });
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={14} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};
