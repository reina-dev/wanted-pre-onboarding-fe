import React from 'react';
import Header from '../components/Header';
import { Background } from '../components/Styled';
import Feed from './Feed';
const Main = () => {
  return (
    <div>
      <Header />
      <Background>
        <Feed />
      </Background>
    </div>
  );
};

export default Main;
