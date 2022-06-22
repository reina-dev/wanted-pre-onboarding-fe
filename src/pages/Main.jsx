import React from 'react';
import Header from '../components/Header';
import { Background } from '../components/Styled';
import Feed from './Feed';
import MockupData from '../components/MockupData';

const Main = () => {
  // onload 구현 실패
  const load = (window.onload = function () {
    return 'Loading...';
  });

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
