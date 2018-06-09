import React from 'react';
import styled from 'styled-components';

const Nav = styled.h2`
  display: flex;
  justify-content: center;
  background: #5e003e;
  color: #fff;
  margin-top: 0px;
  padding: 10px;
  font-family: 'Jua', sans-serif;
  font-size: 25px;
`;

export default () => (
  <div>
    <Nav>DEVCOMP</Nav>
  </div>
);
