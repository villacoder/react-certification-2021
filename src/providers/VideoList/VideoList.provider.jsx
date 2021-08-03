import React, { createContext, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Search/Search.provider';
export const VideoListContext = createContext();
const VideoListProvider = (props) => {
  const { search } = useContext(SearchContext);
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyBAYPio9KXpYuABx-53XHwdxKjOVxCn1p8&part=snippet&q=${search}&maxResults=23`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        setVideos(data.items);
      } catch (error) {
        throw new Error(error);
      }
    };
    getVideos();
  }, [search]);

  return (
    <VideoListContext.Provider value={{}}>{props.children}</VideoListContext.Provider>
  );
};

export default VideoListProvider;
