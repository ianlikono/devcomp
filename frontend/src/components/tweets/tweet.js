import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  box-shadow: 0 0 5px #493131;
  margin: 5px;
`;

const Bar = styled.i`
  margin-right: -10px;
  margin-bottom: 0px;
  cursor: pointer;
`;

class Tweet extends Component {
  render() {
    const { text, id } = this.props.obj;
    return (
      <div>
        <Container>
          {text}
          <Bar className="far fa-bookmark" />
        </Container>
      </div>
    );
  }
}

export default Tweet;
