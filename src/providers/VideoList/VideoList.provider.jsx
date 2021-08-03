import React, { createContext, useEffect, useState } from 'react';
export const VideoListContext = createContext();
const VideoListProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('wizeline');

  useEffect(() => {
    const getVideos = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${process.env.REACT_APP_GOOGLE_APP_API_KEY}&type=video&maxResults=23&q=${search}`;
        const response = await fetch(url);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        throw new Error(error);
      }
    };
    getVideos();
  }, [search]);

  return (
    <VideoListContext.Provider
      value={{
        setSearch,
        videos,
      }}
    >
      {props.children}
    </VideoListContext.Provider>
  );
};

export default VideoListProvider;
