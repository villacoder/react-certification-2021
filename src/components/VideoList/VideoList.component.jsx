import React from 'react';
import styled from 'styled-components';

const VideoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 35rem;
  border-radius: 0.4rem;
  margin: 2rem;
  border: 1px #dad4d4 solid;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
  }
`;

const VideoImageDiv = styled.div`
  height: 140px;
`;

const TitleSpan = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem;
`;

const DescriptionSpan = styled.span`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: left;
  margin: 2rem;
`;

const VideoList = ({ video }) => {
  const { title, description, thumbnails } = video;

  return (
    <VideoCardDiv>
      <VideoImageDiv
        style={{
          backgroundImage: `url(${thumbnails.medium.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderTopRightRadius: '0.4rem',
          borderTopLeftRadius: '0.4rem',
        }}
      ></VideoImageDiv>
      <TitleSpan>{title}</TitleSpan>
      <DescriptionSpan>{description ? description : 'watch video...'}</DescriptionSpan>
    </VideoCardDiv>
  );
};

export default VideoList;
