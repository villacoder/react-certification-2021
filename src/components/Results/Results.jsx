import React from 'react';
import { CardsGrid, Card, Thumbnail, ThumbnailImg, InfoArea } from './Results.components';

const Results = ({ searchResultItems }) => {
  const cards = searchResultItems.map((item) => (
    <Card>
      <Thumbnail>
        <ThumbnailImg src={item.snippet.thumbnails.medium.url} />
      </Thumbnail>
      <InfoArea>
        <h2 style={{ margin: '5px 0' }}>{item.snippet.title}</h2>
        <p>{item.snippet.description}</p>
      </InfoArea>
    </Card>
  ));
  return <CardsGrid>{cards}</CardsGrid>;
};

export default Results;
