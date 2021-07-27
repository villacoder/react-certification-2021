import React from 'react';
import { Navbar, Results } from '../../components';
import { HomeArea, Title } from './Home.components';
import { items } from '../../mock/youtube-videos-mock.json';

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeArea>
        <Title>React Challenge</Title>
        <Results searchResultItems={items} />
      </HomeArea>
    </>
  );
}

export default HomePage;
