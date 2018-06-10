import React from 'react';
import styled from 'styled-components';
import Todos from './todos';
import TodosNav from './todosNav';

const Container = styled.div`
  flex-basis: 20em;
  flex-grow: 0;
  height: 100vh;
`;

export default () => (
  <Container>
    <TodosNav />
    <Todos />
  </Container>
);
