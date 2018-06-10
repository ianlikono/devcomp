import React from 'react';
import styled from 'styled-components';
import Tweets from './tweets';
import Search from './tweetsNav';

const Container = styled.div`
  box-shadow: 5px 10px #d8d2d2;
  flex-basis: 40em;
  flex-grow: 0;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchArray: [],
      tweetsDisplay: [],
    };
  }

  render() {
    return (
      <Container>
        <Search searchState={this.state.searchArray} />
        <Tweets tweetsParent={this.state.tweetsDisplay} />
      </Container>
    );
  }
}
