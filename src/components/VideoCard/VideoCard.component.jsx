import React from 'react';
import { Video, Card, CardImageContainer, CardImage, CardText } from './VideoCardStyled';

const VideoCard = ( video ) => {

    return (
        <Video>
            <Card>
                <CardImageContainer>
                    <CardImage src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
                </CardImageContainer>
                <CardText>
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                </CardText>
            </Card>
        </Video>
    );
}

export default VideoCard;
