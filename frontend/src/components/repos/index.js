import React from 'react';
import styled from 'styled-components';
import RepoNav from './repoNav';
import Repos from './repos';

const Container = styled.div`
  box-shadow: 5px 10px #d8d2d2;
  flex-basis: 20em;
  flex-grow: 0;
`;

export default () => (
  <Container>
    <RepoNav />
    <Repos />
  </Container>
);
