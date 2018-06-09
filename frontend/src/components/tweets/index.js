import React from 'react';
import styled from 'styled-components';
import Tweets from './tweets';
import TweetsNav from './tweetsNav';

const Container = styled.div`
  box-shadow: 5px 10px #d8d2d2;
  flex-basis: 40em;
  flex-grow: 0;
`;

export default () => (
  <Container>
    <TweetsNav />
    <Tweets />
  </Container>
);
