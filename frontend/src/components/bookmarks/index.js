import React from 'react';
import styled from 'styled-components';
import Bookmarks from './bookmarks';
import BookmarksNav from './bookmarksNav';

const Container = styled.div`
  flex-basis: 20em;
  flex-grow: 0;
  height: 100vh;
`;

export default () => (
  <Container>
    <BookmarksNav />
    <Bookmarks />
  </Container>
);
