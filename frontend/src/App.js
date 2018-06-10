import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav';
import Repos from './components/repos';
import Todos from './components/todos';
import Tweets from './components/tweets/';
import './reset.css';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <React.Fragment>
    <Nav />
    {/* <Stories /> */}
    <Main>
      <Repos />
      <Tweets />
      <Todos />
    </Main>
  </React.Fragment>
);
