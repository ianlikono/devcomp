import React from 'react';
import styled from 'styled-components';
import Bookmarks from './components/bookmarks';
import Nav from './components/nav';
import Repos from './components/repos';
import Stories from './components/stories/stories';
import Tweets from './components/tweets/';
import './reset.css';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <React.Fragment>
    <Nav />
    <Stories />
    <Main>
      <Repos />
      <Tweets />
      <Bookmarks />
    </Main>
  </React.Fragment>
);
